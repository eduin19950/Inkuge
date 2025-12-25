from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _


class UserManager(BaseUserManager):
    """Custom user manager."""
    
    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular user."""
        if not email:
            raise ValueError(_('The Email field must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        """Create and save a superuser."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'ADMIN')
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """Custom user model with role-based access."""
    
    class Role(models.TextChoices):
        ADMIN = 'ADMIN', _('Admin')
        STAFF = 'STAFF', _('Staff/Trainer')
        STUDENT = 'STUDENT', _('Student')
        PASTOR = 'PASTOR', _('Pastor')
        PUBLIC = 'PUBLIC', _('Public User')
    
    username = None  # Remove username field
    email = models.EmailField(_('email address'), unique=True)
    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.PUBLIC
    )
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    profile_picture = models.URLField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    
    # Additional fields for students
    enrollment_date = models.DateField(blank=True, null=True)
    church_affiliation = models.CharField(max_length=200, blank=True, null=True)
    
    # For pastors
    church_name = models.CharField(max_length=200, blank=True, null=True)
    years_in_ministry = models.IntegerField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    
    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        ordering = ['-created_at']
    
    def __str__(self):
        return self.email
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def is_admin(self):
        return self.role == self.Role.ADMIN or self.is_superuser
    
    def is_staff_member(self):
        return self.role in [self.Role.ADMIN, self.Role.STAFF] or self.is_staff
    
    def is_student_user(self):
        return self.role == self.Role.STUDENT
    
    def is_pastor_user(self):
        return self.role == self.Role.PASTOR



