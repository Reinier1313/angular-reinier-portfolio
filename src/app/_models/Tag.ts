export class Tag {
    static readonly NextJS = new Tag('Next.JS', '#FF6F61'); // Soft Coral
    static readonly TailwindCSS = new Tag('Tailwind CSS', '#4A90E2'); // Soft Blue
    static readonly SEOOptimization = new Tag('SEO Optimization', '#7ED321'); // Soft Green
    static readonly React = new Tag('React', '#9B59B6'); // Soft Purple
    static readonly ResponsiveDesign = new Tag('Responsive Design', '#F39C12'); // Soft Orange
    static readonly Python = new Tag('Python', '#F1C40F'); // Soft Yellow
    static readonly ReactJS = new Tag('React JS', '#5DADE2'); // Soft Cyan
    static readonly RaspberryPi = new Tag('Raspberry Pi', '#E67E22'); // Soft Tangerine
    static readonly IOTSensors = new Tag('IoT Sensors', '#1ABC9C'); // Soft Teal
    static readonly MobileAppDevelopment = new Tag('Mobile App Development', '#2ECC71'); // Soft Lime Green
    static readonly Electronics = new Tag('Electronics', '#8E44AD'); // Soft Violet
    static readonly DatabaseManagement = new Tag('Database Management', '#2980B9'); // Soft Navy Blue
    static readonly UserAuthentication = new Tag('User Authentication', '#E74C3C'); // Soft Red
    static readonly AndroidStudio = new Tag('Android Studio', '#34495E'); // Soft Dark Gray
    static readonly Java = new Tag('Java', '#C0392B'); // Soft Dark Red
    static readonly Firebase = new Tag('Firebase', '#F39C12'); // Soft Orange
    static readonly GoogleMapsAPI = new Tag('Google Maps API', '#27AE60'); // Soft Green
    static readonly Arduino = new Tag('Arduino', '#16A085'); // Soft Dark Green
    static readonly DataVisualization = new Tag('Data Visualization', '#3498DB'); // Soft Light Blue
    static readonly WebDashboard = new Tag('Web Dashboard', '#D35400'); // Soft Burnt Orange
    static readonly SensorIntegration = new Tag('Sensor Integration', '#F7C6C7'); // Soft Light Peach
    static readonly MechanicalDesign = new Tag('Mechanical Design', '#BDC3C7'); // Soft Light Gray
    static readonly MedicalDeviceDevelopment = new Tag('Medical Device Development', '#1F618D'); // Soft Dark Blue
    static readonly TypeScript = new Tag ('TypeScript', '#8a8583' );

    private constructor(private readonly key: string, public readonly color: string) {}

    toString() {
        return this.key;
    }
}
