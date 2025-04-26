# Public Directory for Static Assets

This directory contains all the static assets (images, icons, etc.) used in the portfolio website.

## Directory Structure

- `/assets/about` - Images related to the About section
- `/assets/skills` - Icons for different skills
- `/assets/projects` - Project screenshots
- `/assets/nav` - Navigation icons
- `/assets/Contact` - Contact section icons

## Adding New Images

1. Place your images in the appropriate subdirectory
2. Reference them in your code with paths starting with a forward slash:

```jsx
// Example in a React component
<img src="/assets/skills/new-skill.png" alt="New Skill" />

// Example in a JSON data file
{
  "title": "New Skill",
  "imageSrc": "/assets/skills/new-skill.png"
}
```

## Important Notes

- All image paths should start with a forward slash (`/`) to ensure they're correctly resolved from the root of the deployed site
- Keep image sizes optimized for web (use formats like WebP when possible)
- Use meaningful file names that describe the content of the image
