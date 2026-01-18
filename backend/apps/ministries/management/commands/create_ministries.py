from django.core.management.base import BaseCommand
from apps.ministries.models import Ministry


class Command(BaseCommand):
    help = 'Creates default ministries if they do not exist'

    def handle(self, *args, **options):
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

        created_count = 0
        existing_count = 0

        for ministry_data in ministries_data:
            ministry, created = Ministry.objects.get_or_create(
                ministry_type=ministry_data['ministry_type'],
                defaults=ministry_data
            )
            
            if created:
                created_count += 1
                self.stdout.write(
                    self.style.SUCCESS(f'✅ Created ministry: {ministry.name}')
                )
            else:
                existing_count += 1
                self.stdout.write(
                    self.style.WARNING(f'⚠️  Ministry already exists: {ministry.name}')
                )

        self.stdout.write('')
        self.stdout.write(self.style.SUCCESS(f'Summary:'))
        self.stdout.write(self.style.SUCCESS(f'  - Created: {created_count} ministries'))
        self.stdout.write(self.style.WARNING(f'  - Already existed: {existing_count} ministries'))
        self.stdout.write(self.style.SUCCESS(f'  - Total: {len(ministries_data)} ministries'))

