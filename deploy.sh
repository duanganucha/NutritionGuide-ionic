#!/bin/bash

# Build the project first
ionic build --prod

# Create or switch to gh-pages branch
if git show-ref --verify --quiet refs/heads/gh-pages; then
    git checkout gh-pages
    # Clean existing files except .git
    find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +
else
    git checkout -b gh-pages
fi

# Copy build files from www folder
cp -r www/* .

# Stage all changes
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages

# Switch back to previous branch
git checkout -

echo "Deployment complete! Your site will be available at https://[username].github.io/[repository-name]"
