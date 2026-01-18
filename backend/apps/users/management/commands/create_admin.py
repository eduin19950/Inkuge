"""
Management command to create a superuser if it doesn't exist.
Usage: python manage.py create_admin
"""

from django.core.management.base import BaseCommand
from apps.users.models import User
import os


class Command(BaseCommand):
    help = 'Creates a superuser if it does not exist'

    def add_arguments(self, parser):
        parser.add_argument('--email', type=str, help='Admin email address')
        parser.add_argument('--password', type=str, help='Admin password')
        parser.add_argument('--first-name', type=str, help='Admin first name', default='Admin')
        parser.add_argument('--last-name', type=str, help='Admin last name', default='User')

    def handle(self, *args, **options):
        # Get credentials from arguments or environment variables
        email = options.get('email') or os.getenv('ADMIN_EMAIL', 'admin@apologeticsrwanda.org')
        password = options.get('password') or os.getenv('ADMIN_PASSWORD', 'Admin@2025')
        first_name = options.get('first_name') or 'Admin'
        last_name = options.get('last_name') or 'User'

        # Check if user already exists
        if User.objects.filter(email=email).exists():
            self.stdout.write(
                self.style.WARNING(f'User with email {email} already exists.')
            )
            return

        # Create superuser
        try:
            User.objects.create_superuser(
                email=email,
                password=password,
                first_name=first_name,
                last_name=last_name,
                role='ADMIN'
            )
            self.stdout.write(
                self.style.SUCCESS(f'✅ Superuser created successfully!')
            )
            self.stdout.write(f'Email: {email}')
            self.stdout.write(f'Password: {password}')
            self.stdout.write(
                self.style.WARNING('⚠️  Please change the password after first login!')
            )
        except Exception as e:
            self.stdout.write(
                self.style.ERROR(f'Failed to create superuser: {str(e)}')
            )

