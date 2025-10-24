// --- I18N (Translations) ---
const translations = {
    'hi': {
        'lang_code': 'hi-IN',
        'page_title': 'हमारी आवाज़, हमारे अधिकार',
        'header_title': 'हमारी आवाज़, हमारे अधिकार',
        'header_subtitle': 'MGNREGA प्रदर्शन डैशबोर्ड',
        'loading_title': 'डेटा लोड हो रहा है...',
        'loading_subtitle': 'कृपया प्रतीक्षा करें...',
        'state_select_title': 'अपना राज्य चुनें',
        'district_select_title': 'अपना जिला चुनें',
        'district_back_btn': '← राज्य बदलें',
        'dash_back_btn': '← बदलें',
        'dash_subtitle': 'MGNREGA प्रदर्शन डेटा',
        'stat_demanded_title': 'सक्रिय जॉब कार्ड',
        'stat_generated_title': 'काम पाने वाले घर',
        'stat_payment_title': 'समय पर भुगतान',
        'stat_persondays_title': 'कुल व्यक्ति दिन',
        'stat_works_title': 'पूरे हुए काम',
        'stat_workers_title': 'कुल श्रमिक',
        'stat_wage_title': 'औसत मजदूरी',
        'stat_avgdays_title': 'औसत रोजगार दिन',
        'explain_btn': 'इसका क्या मतलब है?',
        'explain_demanded': (num) => `कुल ${num} सक्रिय जॉब कार्ड हैं।`,
        'explain_generated': (num, pc) => `कुल ${num} घरों ने वास्तव में काम किया। (${pc}% जॉब कार्ड धारकों ने काम पाया)`,
        'explain_payment': (num) => `${num}% भुगतान 15 दिनों में किए गए।`,
        'explain_persondays': (num) => `कुल ${num} व्यक्ति दिन का काम हुआ।`,
        'explain_works': (num, ongoing) => `${num} काम पूरे हुए, ${ongoing} जारी हैं।`,
        'explain_workers': (num, women) => `कुल ${num} श्रमिक, जिसमें ${women}% महिलाएं हैं।`,
        'explain_wage': (num) => `प्रति व्यक्ति प्रति दिन औसत मजदूरी ₹${num} है।`,
        'explain_avgdays': (num) => `प्रति घर औसत ${num} दिन रोजगार मिला।`,
        'more_details': 'और जानकारी',
        'key_metrics': 'मुख्य आंकड़े',
        'work_details': 'काम का विवरण',
        'worker_details': 'श्रमिक विवरण',
        'payment_details': 'भुगतान विवरण',
        'rating_good': 'अच्छा',
        'rating_vgood': 'बहुत अच्छा',
        'rating_ok': 'ठीक है',
        'rating_bad': 'सुधार की ज़रूरत है',
        'footer_line1': 'यह जानकारी MGNREGA के आधिकारिक data.gov.in पोर्टल से ली गई है।',
        'footer_line2': 'वास्तविक समय का डेटा',
        'speak_label': 'बोलें',
        'location_not_found': 'क्षमा करें, आपके स्थान के लिए डेटा उपलब्ध नहीं है',
        'detected_location': 'पता चला स्थान',
        'please_select_manually': 'कृपया मैन्युअल रूप से चुनें',
        'error_loading': 'डेटा लोड करने में त्रुटि',
        'retry': 'पुनः प्रयास करें'
    },
    'en': {
        'lang_code': 'en-US',
        'page_title': 'Our Voice, Our Rights',
        'header_title': 'Our Voice, Our Rights',
        'header_subtitle': 'MGNREGA Performance Dashboard',
        'loading_title': 'Loading data...',
        'loading_subtitle': 'Please wait...',
        'state_select_title': 'Select Your State',
        'district_select_title': 'Select Your District',
        'district_back_btn': '← Change State',
        'dash_back_btn': '← Change',
        'dash_subtitle': 'MGNREGA Performance Data',
        'stat_demanded_title': 'Active Job Cards',
        'stat_generated_title': 'Households Worked',
        'stat_payment_title': 'Timely Payment',
        'stat_persondays_title': 'Total Person Days',
        'stat_works_title': 'Completed Works',
        'stat_workers_title': 'Total Workers',
        'stat_wage_title': 'Average Wage',
        'stat_avgdays_title': 'Avg Employment Days',
        'explain_btn': 'What does this mean?',
        'explain_demanded': (num) => `Total ${num} active job cards in the district.`,
        'explain_generated': (num, pc) => `Total ${num} households actually worked. (${pc}% of job card holders got work)`,
        'explain_payment': (num) => `${num}% of payments were made within 15 days.`,
        'explain_persondays': (num) => `Total ${num} person days of work completed.`,
        'explain_works': (num, ongoing) => `${num} works completed, ${ongoing} ongoing.`,
        'explain_workers': (num, women) => `Total ${num} workers, ${women}% women.`,
        'explain_wage': (num) => `Average wage of ₹${num} per person per day.`,
        'explain_avgdays': (num) => `Average ${num} days of employment per household.`,
        'more_details': 'More Details',
        'key_metrics': 'Key Metrics',
        'work_details': 'Work Details',
        'worker_details': 'Worker Details',
        'payment_details': 'Payment Details',
        'rating_good': 'Good',
        'rating_vgood': 'Very Good',
        'rating_ok': 'Okay',
        'rating_bad': 'Needs Improvement',
        'footer_line1': 'This information is from the official MGNREGA data.gov.in portal.',
        'footer_line2': 'Real-time data',
        'speak_label': 'Speak',
        'location_not_found': 'Sorry, data not available for your location',
        'detected_location': 'Detected Location',
        'please_select_manually': 'Please select manually',
        'error_loading': 'Error loading data',
        'retry': 'Retry'
    }
};

let currentLang = 'hi';
let selectedState = '';
let currentUtterance = null;
let apiData = null; // Cache for API data

// --- DOM Elements ---
const languageSelector = document.getElementById('language-selector');
const loadingScreen = document.getElementById('loading-screen');
const stateSelector = document.getElementById('state-selector');
const districtSelector = document.getElementById('district-selector');
const dashboard = document.getElementById('dashboard');

// --- API Functions ---
async function fetchMGNREGAData(stateName = null, districtName = null, limit = 1000) {
    try {
        // Build URL for Vercel serverless function
        const params = new URLSearchParams({
            'limit': limit,
            'offset': '0'
        });
        
        if (stateName) {
            params.append('state', stateName);
        }
        
        if (districtName) {
            params.append('district', districtName);
        }
        
        const url = `${API_CONFIG.BASE_URL}?${params.toString()}`;
        
        console.log('Fetching from serverless function:', url);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response received');
        console.log('Total records:', data.records ? data.records.length : 0);
        
        if (data.records && data.records.length > 0) {
            console.log('First record sample:', data.records[0]);
            console.log('All field names:', Object.keys(data.records[0]));
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching MGNREGA data:', error);
        throw error;
    }
}

function processAPIData(apiResponse) {
    const processed = {};
    
    if (!apiResponse.records || apiResponse.records.length === 0) {
        console.error('No records found in API response');
        return processed;
    }
    
    console.log('Sample record from API:', apiResponse.records[0]);
    
    apiResponse.records.forEach(record => {
        const stateName = record.state_name;
        const districtName = record.district_name;
        
        if (!stateName || !districtName) return;
        
        if (!processed[stateName]) {
            processed[stateName] = {};
        }
        
        // Use CORRECT field names from the actual API
        const activeJobCards = parseInt(record.Total_No_of_Active_Job_Cards || 0);
        const activeWorkers = parseInt(record.Total_No_of_Active_Workers || 0);
        const householdsWorked = parseInt(record.Total_Households_Worked || 0);
        const individualsWorked = parseInt(record.Total_Individuals_Worked || 0);
        const personDays = parseInt(record.Persondays_of_Central_Liability_so_far || 0);
        const avgDaysPerHousehold = parseFloat(record.Average_days_of_employment_provided_per_Household || 0);
        const paymentOnTime = parseFloat(record.percentage_payments_gererated_within_15_days || 0);
        const avgWage = parseFloat(record.Average_Wage_rate_per_day_per_person || 0);
        const completedWorks = parseInt(record.Number_of_Completed_Works || 0);
        const ongoingWorks = parseInt(record.Number_of_Ongoing_Works || 0);
        const totalWorks = parseInt(record.Total_No_of_Works_Takenup || 0);
        const womenPersonDays = parseInt(record.Women_Persondays || 0);
        const scPersonDays = parseInt(record.SC_persondays || 0);
        const stPersonDays = parseInt(record.ST_persondays || 0);
        const totalWorkers = parseInt(record.Total_No_of_Workers || 0);
        const totalExp = parseFloat(record.Total_Exp || 0);
        const wages = parseFloat(record.Wages || 0);
        const materialWages = parseFloat(record.Material_and_skilled_Wages || 0);
        const days100Plus = parseInt(record.Total_No_of_HHs_completed_100_Days_of_Wage_Employment || 0);
        const differentlyAbled = parseInt(record.Differently_abled_persons_worked || 0);
        
        // Calculate percentages
        const womenPercentage = personDays > 0 ? Math.round((womenPersonDays / personDays) * 100) : 0;
        const scPercentage = personDays > 0 ? Math.round((scPersonDays / personDays) * 100) : 0;
        const stPercentage = personDays > 0 ? Math.round((stPersonDays / personDays) * 100) : 0;
        
        // Create district entry with API data
        processed[stateName][districtName] = {
            displayName_hi: districtName,
            displayName_en: districtName,
            
            // Primary metrics
            demanded: activeJobCards,
            generated: householdsWorked,
            personDays: personDays,
            
            // Worker details
            individualsWorked: individualsWorked,
            activeWorkers: activeWorkers,
            totalWorkers: totalWorkers,
            womenPersonDays: womenPersonDays,
            womenPercentage: womenPercentage,
            scPersonDays: scPersonDays,
            scPercentage: scPercentage,
            stPersonDays: stPersonDays,
            stPercentage: stPercentage,
            differentlyAbled: differentlyAbled,
            
            // Work details
            completedWorks: completedWorks,
            ongoingWorks: ongoingWorks,
            totalWorks: totalWorks,
            days100Plus: days100Plus,
            
            // Financial details
            avgDays: avgDaysPerHousehold,
            avgWage: avgWage,
            paymentOnTime: paymentOnTime,
            totalExp: totalExp,
            wages: wages,
            materialWages: materialWages,
            
            // Meta
            finYear: record.fin_year || 'N/A',
            month: record.month || 'N/A'
        };
        
        // Log first entry for debugging
        if (Object.keys(processed).length === 1 && Object.keys(processed[stateName]).length === 1) {
            console.log('✅ First processed entry:', processed[stateName][districtName]);
            console.log('Sample values - Demanded:', activeJobCards, 'Generated:', householdsWorked, 'PersonDays:', personDays);
        }
    });
    
    console.log('Processed data:', processed);
    console.log('Total states:', Object.keys(processed).length);
    return processed;
}

// --- Text-to-Speech (TTS) Function ---
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = translations[currentLang].lang_code;
            utterance.pitch = 1;
            utterance.rate = 0.9;
            
            currentUtterance = utterance;
            
            utterance.onend = () => {
                currentUtterance = null;
            };
            
            utterance.onerror = (event) => {
                console.error('Speech synthesis error:', event);
                currentUtterance = null;
            };
            
            window.speechSynthesis.speak(utterance);
        }, 100);
    } else {
        console.log("Browser does not support speech synthesis.");
    }
}

// --- App Logic ---

async function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all static text
    const t = translations[lang];
    document.title = t.page_title;
    document.getElementById('header-title').textContent = t.header_title;
    document.getElementById('header-subtitle').textContent = t.header_subtitle;
    document.getElementById('loading-title').textContent = t.loading_title;
    document.getElementById('loading-subtitle').textContent = t.loading_subtitle;
    document.getElementById('state-select-title').textContent = t.state_select_title;
    document.getElementById('district-select-title').textContent = t.district_select_title;
    document.getElementById('district-back-btn').textContent = t.district_back_btn;
    document.getElementById('dash-back-btn').textContent = t.dash_back_btn;
    document.getElementById('dash-subtitle').textContent = t.dash_subtitle;
    document.getElementById('stat-demanded-title').textContent = t.stat_demanded_title;
    document.getElementById('stat-generated-title').textContent = t.stat_generated_title;
    document.getElementById('stat-payment-title').textContent = t.stat_payment_title;
    document.getElementById('stat-persondays-title').textContent = t.stat_persondays_title;
    document.getElementById('stat-works-title').textContent = t.stat_works_title;
    document.getElementById('stat-workers-title').textContent = t.stat_workers_title;
    document.getElementById('stat-wage-title').textContent = t.stat_wage_title;
    document.getElementById('stat-avgdays-title').textContent = t.stat_avgdays_title;
    document.getElementById('stat-demanded-explain-btn').textContent = t.explain_btn;
    document.getElementById('stat-generated-explain-btn').textContent = t.explain_btn;
    document.getElementById('stat-payment-explain-btn').textContent = t.explain_btn;
    document.getElementById('stat-persondays-explain-btn').textContent = t.explain_btn;
    document.getElementById('stat-works-explain-btn').textContent = t.explain_btn;
    document.getElementById('stat-workers-explain-btn').textContent = t.explain_btn;
    document.getElementById('stat-wage-explain-btn').textContent = t.explain_btn;
    document.getElementById('stat-avgdays-explain-btn').textContent = t.explain_btn;
    document.getElementById('footer-line1').textContent = t.footer_line1;
    document.getElementById('footer-line2').textContent = t.footer_line2;
    
    // Update section titles
    const keyMetricsTitle = document.getElementById('key-metrics-title');
    if (keyMetricsTitle) keyMetricsTitle.textContent = t.key_metrics || 'Key Metrics';
    
    const moreDetailsTitle = document.getElementById('more-details-title');
    if (moreDetailsTitle) moreDetailsTitle.textContent = t.more_details || 'More Details';
    
    // Hide language selector, show loading screen
    languageSelector.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    
    try {
        // Fetch data from API
        const apiResponse = await fetchMGNREGAData();
        apiData = processAPIData(apiResponse);
        
        if (Object.keys(apiData).length === 0) {
            throw new Error('No data available');
        }
        
        // Try location detection
        checkLocation();
    } catch (error) {
        console.error('Failed to load data:', error);
        showError(t.error_loading);
    }
}

function showError(message) {
    loadingScreen.classList.add('hidden');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'card';
    errorDiv.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
            <h2 style="color: #dc2626; margin-bottom: 1rem;">${message}</h2>
            <button onclick="location.reload()" class="btn btn-primary">
                ${translations[currentLang].retry}
            </button>
        </div>
    `;
    document.querySelector('main').appendChild(errorDiv);
}

function checkLocation() {
    if (navigator.geolocation) {
        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);
    } else {
        console.log("Geolocation not supported");
        locationError();
    }
}

async function locationSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`);
        const data = await response.json();
        
        console.log("Location data received:", data.address);
        
        let detectedState = data.address.state;
        let detectedDistrict = data.address.state_district || data.address.county || data.address.city;

        if (detectedState && detectedDistrict) {
            detectedDistrict = detectedDistrict.replace(" District", "").replace(" district", "");
            
            console.log("Detected State:", detectedState);
            console.log("Detected District:", detectedDistrict);
            
            let matchedState = null;
            let matchedDistrict = null;
            
            const availableStates = Object.keys(apiData);
            console.log("Available states:", availableStates);
            
            // Find matching state
            for (let state of availableStates) {
                if (state.toLowerCase().includes(detectedState.toLowerCase()) || 
                    detectedState.toLowerCase().includes(state.toLowerCase())) {
                    matchedState = state;
                    console.log("Matched state:", matchedState);
                    break;
                }
            }
            
            // If state matched, try to find matching district
            if (matchedState) {
                const availableDistricts = Object.keys(apiData[matchedState]);
                console.log("Available districts in", matchedState, ":", availableDistricts);
                
                for (let district of availableDistricts) {
                    const districtData = apiData[matchedState][district];
                    const nameEn = districtData.displayName_en || district;
                    
                    if (district.toLowerCase().includes(detectedDistrict.toLowerCase()) || 
                        detectedDistrict.toLowerCase().includes(district.toLowerCase()) ||
                        nameEn.toLowerCase().includes(detectedDistrict.toLowerCase()) ||
                        detectedDistrict.toLowerCase().includes(nameEn.toLowerCase())) {
                        matchedDistrict = district;
                        console.log("Matched district:", matchedDistrict);
                        break;
                    }
                }
            }
            
            // If we found both state and district, show the dashboard
            if (matchedState && matchedDistrict) {
                console.log("Successfully matched location! Showing dashboard...");
                renderDashboard(matchedState, matchedDistrict);
                loadingScreen.classList.add('hidden');
                dashboard.classList.remove('hidden');
                return;
            } else {
                console.log("Could not match location to available data");
                showLocationNotFound(detectedState, detectedDistrict);
            }
        } else {
            locationError();
        }

    } catch (error) {
        console.error("Geocoding failed:", error);
        locationError();
    }
}

function showLocationNotFound(state, district) {
    const t = translations[currentLang];
    const locationMessage = document.getElementById('location-message');
    
    if (locationMessage) {
        document.getElementById('location-not-found-text').textContent = t.location_not_found;
        document.getElementById('detected-location-label').textContent = t.detected_location;
        document.getElementById('detected-location-value').textContent = `${district}, ${state}`;
        document.getElementById('please-select-text').textContent = t.please_select_manually;
        locationMessage.classList.remove('hidden');
    }
    
    locationError();
}

function locationError(error) {
    if (error) {
        console.log("Location error:", error.message);
    }
    populateStateSelector();
    loadingScreen.classList.add('hidden');
    stateSelector.classList.remove('hidden');
}

function populateStateSelector() {
    const container = document.getElementById('state-grid');
    const states = Object.keys(apiData).sort();
    
    container.innerHTML = '';
    states.forEach(state => {
        const button = document.createElement('button');
        button.className = "btn btn-grid";
        button.textContent = state;
        button.onclick = () => selectState(state);
        container.appendChild(button);
    });
}

function showStateSelector() {
    window.speechSynthesis.cancel();
    
    dashboard.classList.add('hidden');
    districtSelector.classList.add('hidden');
    populateStateSelector();
    stateSelector.classList.remove('hidden');
}

function selectState(stateName) {
    selectedState = stateName;
    populateDistrictSelector(stateName);
    stateSelector.classList.add('hidden');
    districtSelector.classList.remove('hidden');
}

function populateDistrictSelector(stateName) {
    const container = document.getElementById('district-grid');
    const districts = Object.keys(apiData[stateName]).sort();
    
    document.getElementById('district-select-title').textContent = `${translations[currentLang].district_select_title} (${stateName})`;
    
    container.innerHTML = '';
    districts.forEach(districtKey => {
        const district = apiData[stateName][districtKey];
        const displayName = (currentLang === 'hi') ? district.displayName_hi : district.displayName_en;
        
        const button = document.createElement('button');
        button.className = "btn btn-grid";
        button.textContent = displayName;
        button.onclick = () => selectDistrict(stateName, districtKey);
        container.appendChild(button);
    });
}

function selectDistrict(stateName, districtKey) {
    districtSelector.classList.add('hidden');
    renderDashboard(stateName, districtKey);
    dashboard.classList.remove('hidden');
}

function renderDashboard(stateName, districtKey) {
    const t = translations[currentLang];
    const current = apiData[stateName][districtKey];
    
    const format = (num) => num.toLocaleString('en-IN');
    
    // --- 1. Set District Name ---
    const displayName = (currentLang === 'hi') ? current.displayName_hi : current.displayName_en;
    document.getElementById('district-name').textContent = displayName;
    
    // --- 2. Calculate Overall Rating ---
    let rating = getRating(current);
    document.getElementById('overall-rating').innerHTML = `
        <div class="text-3xl">${rating.emoji}</div>
        <div class="font-bold ${rating.color}">${rating.text}</div>
    `;

    // --- 3. Stat 1: Demanded (Active Job Cards) ---
    document.getElementById('stat-demanded').textContent = format(current.demanded);
    document.getElementById('stat-demanded-comp').innerHTML = `<span style="color: #6b7280; font-size: 0.875rem;">${format(current.activeWorkers)} active workers</span>`;
    const explainDemanded = t.explain_demanded(format(current.demanded));
    document.getElementById('explain-demanded').textContent = explainDemanded;

    // --- 4. Stat 2: Generated (Households Worked) ---
    document.getElementById('stat-generated').textContent = format(current.generated);
    const workMetPc = current.demanded > 0 ? Math.round((current.generated / current.demanded) * 100) : 0;
    document.getElementById('stat-generated-comp').innerHTML = `<span style="color: #6b7280; font-size: 0.875rem;">${format(current.personDays)} person days</span>`;
    const explainGenerated = t.explain_generated(format(current.generated), workMetPc);
    document.getElementById('explain-generated').textContent = explainGenerated;

    // --- 5. Stat 3: Payment Percentage ---
    const paymentPc = Math.round(current.paymentOnTime || 0);
    document.getElementById('stat-payment').textContent = `${paymentPc}%`;
    document.getElementById('stat-payment-comp').innerHTML = `<span style="color: ${paymentPc > 90 ? '#059669' : paymentPc > 70 ? '#d97706' : '#dc2626'}; font-size: 0.875rem;">within 15 days</span>`;
    const explainPayment = t.explain_payment(paymentPc);
    document.getElementById('explain-payment').textContent = explainPayment;

    // --- 6. Additional Metrics ---
    // Person Days
    document.getElementById('stat-persondays').textContent = format(current.personDays);
    document.getElementById('stat-persondays-comp').innerHTML = `<span style="color: #6b7280; font-size: 0.875rem;">${current.womenPercentage}% women</span>`;
    const explainPersondays = t.explain_persondays(format(current.personDays));
    document.getElementById('explain-persondays').textContent = explainPersondays;

    // Works
    document.getElementById('stat-works').textContent = format(current.completedWorks);
    document.getElementById('stat-works-comp').innerHTML = `<span style="color: #6b7280; font-size: 0.875rem;">${format(current.ongoingWorks)} ongoing</span>`;
    const explainWorks = t.explain_works(format(current.completedWorks), format(current.ongoingWorks));
    document.getElementById('explain-works').textContent = explainWorks;

    // Workers
    document.getElementById('stat-workers').textContent = format(current.totalWorkers);
    document.getElementById('stat-workers-comp').innerHTML = `<span style="color: #6b7280; font-size: 0.875rem;">${format(current.individualsWorked)} worked</span>`;
    const explainWorkers = t.explain_workers(format(current.totalWorkers), current.womenPercentage);
    document.getElementById('explain-workers').textContent = explainWorkers;

    // Wage
    document.getElementById('stat-wage').textContent = `₹${current.avgWage.toFixed(2)}`;
    const explainWage = t.explain_wage(current.avgWage.toFixed(2));
    document.getElementById('explain-wage').textContent = explainWage;

    // Avg Days
    document.getElementById('stat-avgdays').textContent = Math.round(current.avgDays);
    const explainAvgdays = t.explain_avgdays(Math.round(current.avgDays));
    document.getElementById('explain-avgdays').textContent = explainAvgdays;

    // --- 7. Period Info ---
    const periodEl = document.getElementById('dash-period');
    if (periodEl) {
        periodEl.textContent = `${current.month} ${current.finYear}`;
    }

    // --- 8. Detailed Stats Section ---
    renderDetailedStats(current, t);

    // --- 9. Add Audio Buttons ---
    addAudioToDashboard(displayName, current, rating, explainDemanded, explainGenerated, explainPayment);
}

function renderDetailedStats(current, t) {
    const format = (num) => num.toLocaleString('en-IN');
    const container = document.getElementById('stats-details-container');
    
    if (!container) return;
    
    const stats = [
        { label: currentLang === 'hi' ? 'SC श्रमिक व्यक्ति दिन' : 'SC Workers Person Days', value: format(current.scPersonDays), percent: `${current.scPercentage}%` },
        { label: currentLang === 'hi' ? 'ST श्रमिक व्यक्ति दिन' : 'ST Workers Person Days', value: format(current.stPersonDays), percent: `${current.stPercentage}%` },
        { label: currentLang === 'hi' ? 'महिला व्यक्ति दिन' : 'Women Person Days', value: format(current.womenPersonDays), percent: `${current.womenPercentage}%` },
        { label: currentLang === 'hi' ? 'दिव्यांग श्रमिक' : 'Differently Abled Workers', value: format(current.differentlyAbled) },
        { label: currentLang === 'hi' ? '100+ दिन पूरा करने वाले घर' : 'Households Completed 100+ Days', value: format(current.days100Plus) },
        { label: currentLang === 'hi' ? 'कुल कार्य शुरू किए गए' : 'Total Works Taken Up', value: format(current.totalWorks) },
        { label: currentLang === 'hi' ? 'कुल खर्च (लाख में)' : 'Total Expenditure (in Lakhs)', value: current.totalExp.toFixed(2) },
        { label: currentLang === 'hi' ? 'मजदूरी (लाख में)' : 'Wages (in Lakhs)', value: current.wages.toFixed(2) },
        { label: currentLang === 'hi' ? 'सामग्री और कुशल मजदूरी (लाख में)' : 'Material & Skilled Wages (in Lakhs)', value: current.materialWages.toFixed(2) }
    ];

    container.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            ${stats.map(stat => `
                <div style="background: #f9fafb; padding: 1rem; border-radius: 0.5rem; border-left: 3px solid #667eea;">
                    <div style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.25rem;">${stat.label}</div>
                    <div style="font-size: 1.5rem; font-weight: 700; color: #1f2937;">${stat.value}</div>
                    ${stat.percent ? `<div style="color: #667eea; font-size: 0.875rem; margin-top: 0.25rem;">${stat.percent} of total</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

function getRating(stats) {
    const t = translations[currentLang];
    const workMet = stats.demanded > 0 ? (stats.generated / stats.demanded) : 0;
    const paymentOnTime = (stats.paymentOnTime || 0) / 100;

    // Combined score: 60% work fulfillment + 40% payment timeliness
    const score = (workMet * 0.6) + (paymentOnTime * 0.4);

    if (score > 0.90 && paymentOnTime > 0.90) {
        return { text: t.rating_vgood, emoji: "👍", color: "text-green-600" };
    } else if (score > 0.75 && paymentOnTime > 0.80) {
        return { text: t.rating_good, emoji: "🙂", color: "text-green-500" };
    } else if (score > 0.60) {
        return { text: t.rating_ok, emoji: "😐", color: "text-yellow-600" };
    }
    return { text: t.rating_bad, emoji: "👎", color: "text-red-600" };
}

function addAudioToDashboard(district, current, rating, ...explanations) {
    dashboard.querySelectorAll('.audio-btn').forEach(btn => btn.remove());
    const t = translations[currentLang];
    
    const districtNameEl = document.getElementById('district-name');
    if (districtNameEl && !districtNameEl.querySelector('.audio-btn')) {
        districtNameEl.appendChild(createAudioElement(`${district}. ${t.dash_subtitle}`));
    }
    
    const overallRatingEl = document.getElementById('overall-rating');
    if (overallRatingEl) {
        const existingBtn = overallRatingEl.querySelector('.audio-btn');
        if (existingBtn) existingBtn.remove();
        overallRatingEl.appendChild(createAudioElement(`${rating.text}`));
    }
    
    const demandedTitleEl = document.getElementById('stat-demanded-title');
    const generatedTitleEl = document.getElementById('stat-generated-title');
    const paymentTitleEl = document.getElementById('stat-payment-title');
    
    if (demandedTitleEl && !demandedTitleEl.querySelector('.audio-btn')) {
        demandedTitleEl.appendChild(createAudioElement(`${t.stat_demanded_title} ${current.demanded.toLocaleString('en-IN')}`));
    }
    if (generatedTitleEl && !generatedTitleEl.querySelector('.audio-btn')) {
        generatedTitleEl.appendChild(createAudioElement(`${t.stat_generated_title} ${current.generated.toLocaleString('en-IN')}`));
    }
    if (paymentTitleEl && !paymentTitleEl.querySelector('.audio-btn')) {
        const paymentPc = Math.round(current.paymentOnTime || 0);
        paymentTitleEl.appendChild(createAudioElement(`${t.stat_payment_title} ${paymentPc} प्रतिशत`));
    }
    
    const demandedExplainBtn = document.getElementById('stat-demanded-explain-btn');
    const generatedExplainBtn = document.getElementById('stat-generated-explain-btn');
    const paymentExplainBtn = document.getElementById('stat-payment-explain-btn');
    
    if (demandedExplainBtn && !demandedExplainBtn.querySelector('.audio-btn')) {
        demandedExplainBtn.appendChild(createAudioElement(explanations[0]));
    }
    if (generatedExplainBtn && !generatedExplainBtn.querySelector('.audio-btn')) {
        generatedExplainBtn.appendChild(createAudioElement(explanations[1]));
    }
    if (paymentExplainBtn && !paymentExplainBtn.querySelector('.audio-btn')) {
        paymentExplainBtn.appendChild(createAudioElement(explanations[2]));
    }
}

function createAudioElement(text) {
    const t = translations[currentLang];
    const button = document.createElement('button');
    button.className = "audio-btn";
    button.setAttribute('aria-label', t.speak_label);
    button.onclick = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        speak(text);
    };
    button.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M20 4a9 9 0 010 16M11 5.084A6.023 6.023 0 008 4c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.336 0 2.57-.433 3.536-1.17m5.464-1.83a5.002 5.002 0 000-7.072m5 7.072a9 9 0 000-16"></path></svg>`;
    return button;
}
