# MarkusMoments

## Description
MarkusMoments is a web-based photography portfolio showcasing abstract photographs taken at various lively events. The platform offers an interactive gallery for visitors to explore beautiful imagery, as well as an appointment booking system for photography sessions.

## Features
- **Image Gallery**: Browse a collection of abstract event photos.
- **Appointment Booking**: Schedule photography services seamlessly through an embedded Google Calendar.
- **Responsive Design**: The website adapts to different screen sizes for optimal viewing on devices ranging from desktops to mobile phones.
- **Contact Information**: Easy access to contact details and social media links.

## Installation Instructions
To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/MarkusMoments.git
   cd MarkusMoments/Abstrakti
   ```

2. **Open the project in your browser**: Open `index.html` in your favorite web browser.

3. **Optional - Set up a local server**:
   It is recommended to use a local server to properly handle requests. You can use tools like **XAMPP**, **MAMP**, or a lightweight server like **Live Server** for VS Code.

## Usage Guide
1. Navigate to the homepage to view the abstract image gallery.
2. Click on images to view them in larger size.
3. Visit the appointment page to book a photo session, where you can select a suitable time using the integrated Google Calendar.

## Tech Stack
- **HTML**: Structure of the web pages.
- **CSS**: Styling and responsive design.
- **JavaScript**: Adds interactivity to the navigation.
- **Google Calendar API**: For appointment scheduling.

## API Structure
Currently, the project does not contain a dedicated backend API. The appointment booking utilizes Google Calendar's built-in scheduling functions embedded directly into the website.

## Folder Structure Summary
```
MarkusMoments/
│
├── Abstrakti/
│   ├── index.html             # Home page with image gallery
│   ├── style.css              # Styles for the project
│   ├── navigation bar.js      # JavaScript for responsive navigation
│   └── kuvat/                 # Directory for images
│
├── Ajanvaraus/
│   ├── index.html             # Booking page containing embedded Google Calendar
│   ├── navigation bar.js      # Script for responsive navigation
│   └── style.css              # Styles for the booking page
│
└── README.md                  # Documentation for the project
```

## License
No explicit license information has been found in the project files. Please adhere to appropriate attribution if using any third-party code or images.

## Contributing
Contributions to the project are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`.
3. Make your changes and commit them: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a Pull Request.

We appreciate any contributions to improve the MarkusMoments project!
