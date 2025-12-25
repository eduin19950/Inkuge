from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, UserProfileSerializer

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    """ViewSet for User operations."""
    
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Filter queryset based on user role."""
        user = self.request.user
        if user.is_admin():
            return User.objects.all()
        return User.objects.filter(id=user.id)
    
    @action(detail=False, methods=['get', 'put', 'patch'])
    def me(self, request):
        """Get or update current user profile."""
        if request.method == 'GET':
            serializer = UserSerializer(request.user)
            return Response(serializer.data)
        
        serializer = UserProfileSerializer(
            request.user,
            data=request.data,
            partial=request.method == 'PATCH'
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(UserSerializer(request.user).data)
    
    @action(detail=False, methods=['get'])
    def students(self, request):
        """List all students (admin/staff only)."""
        if not request.user.is_staff_member():
            return Response(
                {"detail": "Permission denied."},
                status=status.HTTP_403_FORBIDDEN
            )
        students = User.objects.filter(role=User.Role.STUDENT)
        serializer = UserSerializer(students, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def pastors(self, request):
        """List all pastors (admin/staff only)."""
        if not request.user.is_staff_member():
            return Response(
                {"detail": "Permission denied."},
                status=status.HTTP_403_FORBIDDEN
            )
        pastors = User.objects.filter(role=User.Role.PASTOR)
        serializer = UserSerializer(pastors, many=True)
        return Response(serializer.data)



