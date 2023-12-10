# Hermano

Hermano is our opinionated take for how to setup new projects that scale. It is a collection of tools and best practices that we have found useful over the years.

# How I built this?

```bash
# Install poetry
curl -sSL https://install.python-poetry.org | python3 -
# Activate poetry
poetry shell
# Setup django website
django-admin startproject main
# Rename folder to server for clarity
mv main server && cd server
# Create an app
python manage.py startapp app
# Create migrations
python manage.py makemigrations app
# Run migrations
python manage.py migrate
```

# Todo

- [x] Setup Next.js pages app with typescript
- [x] Add Mantine & Tailwind
- [ ] Setup authentication
- [ ] Setup payment plans to grant permissions
- [ ] Sync postgres WAL to s3
- [ ] Add backend logging that can be sent to cloudwatch
- [ ] Add frontend logging that can be sent to posthog
