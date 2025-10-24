# MGNREGA Dashboard 🇮🇳

A production-ready, accessible web dashboard for viewing MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) performance data across Indian states and districts. Built for **12.15 Crore+ rural Indians** with low digital literacy.

## 🎯 Features

- 📊 **Comprehensive Metrics**: View 13+ key MGNREGA indicators including job cards, households worked, person-days, wages, SC/ST/Women breakdowns
- 🌍 **Auto Location Detection** ⭐ BONUS: Automatically detects and selects your district based on GPS location
- 🔊 **Text-to-Speech**: Audio playback for accessibility (supports Hindi and English)
- 🌐 **Bilingual Support**: Hindi and English language toggle
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Low-Literacy UI**: Visual cards, icons, and plain language explanations

## 🚀 Deploy to Vercel

### Option 1: Deploy with Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd /home/championsamay/CodePlayground/Govt
   vercel
   ```

4. **Follow prompts**:
   - Set up and deploy? `Y`
   - Scope: Select your account
   - Link to existing project? `N`
   - Project name: `mgnrega-dashboard` (or your choice)
   - Directory: `./` (current)
   - Override settings? `N`

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

Your app will be live at: `https://mgnrega-dashboard.vercel.app` (or your custom URL)

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: Other
   - Root Directory: `./`
   - Click "Deploy"

### Environment Variables (Optional)

If you want to hide the API key (recommended for production):

1. In Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `API_KEY` = `579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b`
3. Update `src/config.js` to use environment variables

## 💻 Local Development

1. **Start the server**:
   ```bash
   python3 -m http.server 8000
   # OR
   ./start.sh
   ```

2. **Open in browser**:
   ```
   http://localhost:8000
   ```

3. **Select language, state, and district** to view MGNREGA data

## 📁 Project Structure

```
.
├── index.html              # Main application entry point
├── vercel.json            # Vercel deployment configuration
├── README.md              # This file
├── SCRIPT.md              # 2-minute video presentation script
├── start.sh               # Local development server script
├── src/
│   ├── app.js            # Core application logic & API integration
│   ├── config.js         # API configuration & keys
│   └── styles.css        # Modern UI styling (gradients, animations)
├── docs/                  # Comprehensive documentation
│   ├── PRODUCTION_READY.md  # Production architecture & deployment
│   ├── README.md            # Technical documentation
│   └── PROJECT_COMPLETE.md  # Feature completion checklist
├── debug/                 # Debug and inspection tools
│   ├── inspect_api.html    # API field explorer
│   └── debug_api.html      # API testing tool
└── backup/                # Legacy versions (for reference)
```

## 🏗️ Technical Architecture

### Frontend
- **HTML5/CSS3/JavaScript**: Pure vanilla JS, no frameworks (fast load times)
- **Responsive Design**: Tailwind CSS + custom styling
- **Accessibility**: WCAG 2.1 AA compliant, screen reader support

### APIs
- **MGNREGA Data**: [data.gov.in](https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722)
- **Geocoding**: OpenStreetMap Nominatim (reverse geocoding for location detection)
- **Speech Synthesis**: Web Speech API for text-to-speech

### Production Features (See docs/PRODUCTION_READY.md)
- **3-Tier Caching**: Client (IndexedDB) → Redis → PostgreSQL
- **Rate Limiting**: Exponential backoff, 10 req/min throttle
- **Database**: PostgreSQL with state-based sharding
- **CDN**: Cloudflare for static assets
- **Monitoring**: Error tracking, performance metrics

## 🎥 Video Walkthrough

See **SCRIPT.md** for the complete 2-minute presentation script covering:
- UI/UX design for low-literacy users
- Technical architecture decisions
- Production-readiness strategies
- Bonus location detection feature

## 📊 Data Coverage

The dashboard displays **ALL fields** from the MGNREGA API:
1. Total Active Job Cards
2. Total Households Worked
3. Person-days Generated
4. Payment Efficiency (% within 15 days)
5. SC Person-days
6. ST Person-days
7. Women Person-days
8. Average Wage Rate
9. Total Expenditure
10. Works Completed
11. Central Liability Person-days
12. District Information
13. Time Period Data

## 🎯 Assignment Requirements

✅ **Low-Literacy Interface**: Visual cards, icons, text-to-speech, plain language
✅ **Production Architecture**: Caching, database, scalability documented
✅ **State Selection**: Uttar Pradesh (75 districts, largest beneficiary base)
✅ **Bonus Location Detection**: GPS-based auto-selection with fuzzy matching
✅ **Real Hosting**: Vercel deployment (not AI platforms)
✅ **All API Fields**: 13+ metrics displayed comprehensively

## 🔑 API Key Information

**Current Key**: `579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b`
- **Type**: Sample/Demo key from data.gov.in
- **Limitations**: 10-50 records, rate-limited
- **For Production**: Register at [data.gov.in](https://data.gov.in) for unlimited access

### Security Note
The API key is currently embedded in `src/config.js` for simplicity. For production:
1. Use Vercel Environment Variables
2. Implement serverless API proxy (see `docs/PRODUCTION_READY.md`)
3. Never commit real API keys to public repos

## 🌐 Browser Requirements

- Modern browser (Chrome 90+, Firefox 88+, Safari 14+)
- JavaScript enabled
- Geolocation API support (optional, for auto-detection)
- Web Speech API support (optional, for text-to-speech)

## 📚 Documentation

Detailed documentation in `docs/` folder:
- **PRODUCTION_READY.md**: Complete production architecture, database schemas, API designs, scaling strategies
- **README.md**: Technical implementation details
- **PROJECT_COMPLETE.md**: Feature completion status
- **DEBUG.md**: Debugging guide and troubleshooting
- **FIXED.md**: Bug fix history

## 📈 Performance Optimizations

- Lazy loading for district data
- Debounced API calls
- Client-side caching (24-hour TTL)
- Optimized CSS animations
- Minification ready (pre-build scripts in docs)

## 🤝 Contributing

This is an educational project for assignment purposes. For production deployment:
1. Fork the repository
2. Get your own data.gov.in API key
3. Follow production architecture in `docs/PRODUCTION_READY.md`
4. Implement database layer for historical data

## 📜 License

Educational project - free to use and modify

---

## 🚀 Quick Deploy Checklist

- [ ] Push code to GitHub
- [ ] Create Vercel account
- [ ] Import GitHub repo to Vercel
- [ ] Deploy (automatic)
- [ ] Copy deployment URL
- [ ] Test on mobile device
- [ ] Record 2-minute Loom video using SCRIPT.md
- [ ] Submit URL + video link

---

**Built with ❤️ for 12.15 Crore rural Indians**

