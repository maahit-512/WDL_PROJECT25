# Virtual Herbal Garden

Welcome to the **Virtual Herbal Garden** project! This application provides a virtual platform to explore various herbs and plants through images, videos, 3D models, and detailed information. 

## Project Structure

Below is an overview of the project's directory structure:

```
Virtual-Herbal-Garden/
├── assets/                  # Static assets like images, videos, audio, etc.
│   ├── images/              # High-quality plant images
│   ├── videos/              # Videos for multimedia (e.g., cultivation demos)
│   ├── audio/               # Audio descriptions for plants
│   └── models/              # 3D model files (e.g., .gltf or .obj)
├── css/                     # CSS files for styling
│   ├── main.css             # Base styles (Member 1)
│   ├── models.css           # Styles for 3D models and plant details (Member 2)
│   ├── multimedia.css       # Styles for multimedia and virtual tours (Member 3)
│   └── interactive.css      # Styles for search, filters, and user features (Member 4)
├── js/                      # JavaScript files for functionality
│   ├── main.js              # Main script for initialization and integration
│   ├── models.js            # 3D model rendering and plant details (Member 2)
│   ├── multimedia.js        # Multimedia playback and virtual tours (Member 3)
│   ├── interactive.js       # Search, filters, and user interactions (Member 4)
│   └── data.js              # JSON data handling for plant information
├── data/                    # Data files (e.g., plant database)
│   └── plants.json          # JSON file with plant details
├── pages/                   # HTML pages for different sections
│   ├── index.html           # Homepage (Member 1)
│   ├── gallery.html         # Plant gallery page (Member 1)
│   ├── plant-details.html   # Template for individual plant pages (Member 2)
│   └── tour.html            # Virtual tour page (Member 3)
├── docs/                    # Documentation and references
│   ├── readme.md            # Project overview and setup instructions
│   └── notes.md             # Team notes or meeting logs
└── index.html               # Entry point to the application (links to other pages)
```

## Team Members and Responsibilities

1. **Member 1**: 
   - CSS: `main.css`
   - HTML: `index.html`, `gallery.html`
2. **Member 2**: 
   - CSS: `models.css`
   - JavaScript: `models.js`
   - HTML: `plant-details.html`
3. **Member 3**: 
   - CSS: `multimedia.css`
   - JavaScript: `multimedia.js`
   - HTML: `tour.html`
4. **Member 4**: 
   - CSS: `interactive.css`
   - JavaScript: `interactive.js`

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/virtual-herbal-garden.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd virtual-herbal-garden
    ```

3. **Open `index.html` in your browser** to view the application.

## Contributing

We welcome contributions from all team members. Please follow the guidelines below:

1. **Create a branch** for your feature or bug fix:
    ```sh
    git checkout -b feature-name
    ```

2. **Commit your changes**:
    ```sh
    git commit -m "Description of your changes"
    ```

3. **Push to the branch**:
    ```sh
    git push origin feature-name
    ```

4. **Create a pull request** to merge your changes into the main branch.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please contact the project maintainers.

Happy Gardening!
