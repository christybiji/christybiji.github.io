---
# Leave the homepage title empty to use the site title
title: ""
date: 2025-06-07
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      area: "bio"  # ✅ Add this line

      # Show a call-to-action button under your biography? (optional)
      #button:
       # text: Download CV
        #url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        I'm a researcher at the Broad Institute of MIT and Harvard. Enthusiastic about research in the intersection of Biomedicine and Machine Learning.
    design:
      view: article-grid
      columns: 2

# You had these blocks commented out. You can re-enable them later.
#  - block: collection
#    content:
#      title: Recent Publications
#    design:
#      view: citation

#  - block: collection
#    id: talks
#    content:
#      title: Recent & Upcoming Talks
#    design:
#      view: article-grid
#      columns: 1

#  - block: collection
#    id: news
#    content:
#      title: Recent News
#    design:
#      view: article-grid
#      columns: 1
---
