from django.apps import AppConfig


class MinistriesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.ministries'

    def ready(self):
        """Run when Django starts - create default ministries if they don't exist"""
        # Import here to avoid circular imports
        from django.db import connection
        from django.db.utils import OperationalError
        
        # Check if database tables exist before trying to create ministries
        try:
            # Check if migrations have been run
            with connection.cursor() as cursor:
                cursor.execute(
                    "SELECT COUNT(*) FROM django_migrations WHERE app='ministries'"
                )
                migration_count = cursor.fetchone()[0]
                
                # Only create ministries if migrations have been run
                if migration_count > 0:
                    from .models import Ministry
                    
                    ministries_data = [
                        {
                            'name': 'Campus & High School Evangelism',
                            'ministry_type': Ministry.MinistryType.EVANGELISM,
                            'description': 'Reaching students in universities and high schools across Rwanda with the Gospel message through engaging events, conferences, and one-on-one discipleship.',
                            'order': 1,
                            'contact_email': 'evangelism@apologeticsrwanda.org',
                        },
                        {
                            'name': 'Christian Apologetics Hub',
                            'ministry_type': Ministry.MinistryType.APOLOGETICS,
                            'description': 'Training believers to defend their faith through reason, evidence, and biblical truth in an increasingly skeptical world.',
                            'order': 2,
                            'contact_email': 'apologetics@apologeticsrwanda.org',
                        },
                        {
                            'name': 'Pastors Leadership Training',
                            'ministry_type': Ministry.MinistryType.LEADERSHIP,
                            'description': 'Equipping pastors and church leaders with the theological knowledge, practical skills, and spiritual formation needed to lead God\'s people effectively.',
                            'order': 3,
                            'contact_email': 'leadership@apologeticsrwanda.org',
                        },
                        {
                            'name': 'Street Kids Ministry',
                            'ministry_type': Ministry.MinistryType.STREET_KIDS,
                            'description': 'Bringing hope, transformation, and the love of Christ to vulnerable children on the streets of Rwanda through practical support and spiritual care.',
                            'order': 4,
                            'contact_email': 'streetkids@apologeticsrwanda.org',
                        },
                    ]
                    
                    for ministry_data in ministries_data:
                        Ministry.objects.get_or_create(
                            ministry_type=ministry_data['ministry_type'],
                            defaults=ministry_data
                        )
                    
                    print("✅ Ministries initialized successfully")
        except OperationalError:
            # Database tables don't exist yet (during initial migrations)
            pass
        except Exception as e:
            # Log but don't crash the app
            print(f"⚠️  Could not create ministries: {str(e)}")
