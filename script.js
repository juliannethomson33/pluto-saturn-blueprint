// Pluto-Saturn Data (1900-2025)
const SIGN_KEYWORDS = {
    "Aries": "self",
    "Taurus": "senses",
    "Gemini": "curiosity",
    "Cancer": "nurturing",
    "Leo": "creativity",
    "Virgo": "refinement",
    "Libra": "relating",
    "Scorpio": "digging",
    "Sagittarius": "freedom",
    "Capricorn": "structure",
    "Aquarius": "breaking free",
    "Pisces": "the unknown"
};

// Simplified year data - primary signs for each year
// Format: { year: { pluto: "Sign", saturn: "Sign", transitions: "optional note" } }
const YEAR_DATA = {
    1900: { pluto: "Gemini", saturn: "Sagittarius", transitions: "Saturn shifts to Capricorn mid-year" },
    1901: { pluto: "Gemini", saturn: "Capricorn" },
    1902: { pluto: "Gemini", saturn: "Capricorn" },
    1903: { pluto: "Gemini", saturn: "Aquarius", transitions: "Saturn enters Aquarius Jan 19" },
    1904: { pluto: "Gemini", saturn: "Aquarius" },
    1905: { pluto: "Gemini", saturn: "Aquarius", transitions: "Saturn briefly in Pisces Apr-Aug" },
    1906: { pluto: "Gemini", saturn: "Pisces" },
    1907: { pluto: "Gemini", saturn: "Pisces" },
    1908: { pluto: "Gemini", saturn: "Pisces", transitions: "Saturn enters Aries Mar-May, Oct onward" },
    1909: { pluto: "Gemini", saturn: "Aries", transitions: "Saturn briefly back in Pisces Dec" },
    1910: { pluto: "Gemini", saturn: "Aries", transitions: "Saturn enters Taurus May, Rx to Aries Dec" },
    1911: { pluto: "Gemini", saturn: "Taurus" },
    1912: { pluto: "Gemini", saturn: "Gemini", transitions: "Pluto briefly in Cancer Sep-Oct; Saturn enters Gemini Jul" },
    1913: { pluto: "Gemini", saturn: "Gemini", transitions: "Pluto in Cancer Jul-Dec" },
    1914: { pluto: "Cancer", saturn: "Cancer", transitions: "Pluto settles in Cancer May; Saturn enters Cancer Aug" },
    1915: { pluto: "Cancer", saturn: "Cancer" },
    1916: { pluto: "Cancer", saturn: "Cancer", transitions: "Saturn enters Leo Oct, Rx back Dec" },
    1917: { pluto: "Cancer", saturn: "Leo" },
    1918: { pluto: "Cancer", saturn: "Leo" },
    1919: { pluto: "Cancer", saturn: "Virgo", transitions: "Saturn enters Virgo Aug" },
    1920: { pluto: "Cancer", saturn: "Virgo" },
    1921: { pluto: "Cancer", saturn: "Virgo", transitions: "Saturn enters Libra Oct" },
    1922: { pluto: "Cancer", saturn: "Libra" },
    1923: { pluto: "Cancer", saturn: "Libra", transitions: "Saturn enters Scorpio Dec" },
    1924: { pluto: "Cancer", saturn: "Scorpio", transitions: "Saturn Rx to Libra Apr-Sep" },
    1925: { pluto: "Cancer", saturn: "Scorpio" },
    1926: { pluto: "Cancer", saturn: "Scorpio", transitions: "Saturn enters Sagittarius Dec" },
    1927: { pluto: "Cancer", saturn: "Sagittarius" },
    1928: { pluto: "Cancer", saturn: "Sagittarius" },
    1929: { pluto: "Cancer", saturn: "Sagittarius", transitions: "Saturn enters Capricorn Mar, Rx back May-Nov" },
    1930: { pluto: "Cancer", saturn: "Capricorn" },
    1931: { pluto: "Cancer", saturn: "Capricorn" },
    1932: { pluto: "Cancer", saturn: "Aquarius", transitions: "Saturn enters Aquarius Feb, Rx to Capricorn Aug-Nov" },
    1933: { pluto: "Cancer", saturn: "Aquarius" },
    1934: { pluto: "Cancer", saturn: "Aquarius" },
    1935: { pluto: "Cancer", saturn: "Pisces", transitions: "Saturn enters Pisces Feb" },
    1936: { pluto: "Cancer", saturn: "Pisces" },
    1937: { pluto: "Cancer", saturn: "Pisces", transitions: "Pluto enters Leo Oct (Rx back Nov); Saturn enters Aries Apr (Rx to Pisces Oct)" },
    1938: { pluto: "Leo", saturn: "Aries", transitions: "Pluto enters Leo Aug; Saturn enters Aries Jan" },
    1939: { pluto: "Leo", saturn: "Aries", transitions: "Pluto Rx to Cancer Feb-Jun; Saturn enters Taurus Jul (Rx to Aries Sep)" },
    1940: { pluto: "Leo", saturn: "Taurus" },
    1941: { pluto: "Leo", saturn: "Taurus" },
    1942: { pluto: "Leo", saturn: "Gemini", transitions: "Saturn enters Gemini May" },
    1943: { pluto: "Leo", saturn: "Gemini" },
    1944: { pluto: "Leo", saturn: "Cancer", transitions: "Saturn enters Cancer Jun" },
    1945: { pluto: "Leo", saturn: "Cancer" },
    1946: { pluto: "Leo", saturn: "Leo", transitions: "Saturn enters Leo Aug" },
    1947: { pluto: "Leo", saturn: "Leo" },
    1948: { pluto: "Leo", saturn: "Leo", transitions: "Saturn enters Virgo Sep" },
    1949: { pluto: "Leo", saturn: "Virgo", transitions: "Saturn Rx to Leo Apr-May" },
    1950: { pluto: "Leo", saturn: "Virgo", transitions: "Saturn enters Libra Nov" },
    1951: { pluto: "Leo", saturn: "Libra", transitions: "Saturn Rx to Virgo Mar-Aug" },
    1952: { pluto: "Leo", saturn: "Libra" },
    1953: { pluto: "Leo", saturn: "Libra", transitions: "Saturn enters Scorpio Oct" },
    1954: { pluto: "Leo", saturn: "Scorpio" },
    1955: { pluto: "Leo", saturn: "Scorpio" },
    1956: { pluto: "Leo", saturn: "Sagittarius", transitions: "Pluto enters Virgo Oct; Saturn enters Sagittarius Jan (Rx to Scorpio May-Oct)" },
    1957: { pluto: "Virgo", saturn: "Sagittarius", transitions: "Pluto Rx to Leo Jan-Aug" },
    1958: { pluto: "Virgo", saturn: "Sagittarius", transitions: "Pluto Rx to Leo Apr-Jun" },
    1959: { pluto: "Virgo", saturn: "Capricorn", transitions: "Saturn enters Capricorn Jan" },
    1960: { pluto: "Virgo", saturn: "Capricorn" },
    1961: { pluto: "Virgo", saturn: "Capricorn" },
    1962: { pluto: "Virgo", saturn: "Aquarius", transitions: "Saturn enters Aquarius Jan" },
    1963: { pluto: "Virgo", saturn: "Aquarius" },
    1964: { pluto: "Virgo", saturn: "Pisces", transitions: "Saturn enters Pisces Mar (Rx to Aquarius Sep-Dec)" },
    1965: { pluto: "Virgo", saturn: "Pisces" },
    1966: { pluto: "Virgo", saturn: "Pisces" },
    1967: { pluto: "Virgo", saturn: "Aries", transitions: "Saturn enters Aries Mar" },
    1968: { pluto: "Virgo", saturn: "Aries" },
    1969: { pluto: "Virgo", saturn: "Taurus", transitions: "Saturn enters Taurus Apr" },
    1970: { pluto: "Virgo", saturn: "Taurus" },
    1971: { pluto: "Virgo", saturn: "Gemini", transitions: "Pluto enters Libra Oct; Saturn enters Gemini Jun" },
    1972: { pluto: "Libra", saturn: "Gemini", transitions: "Pluto Rx to Virgo Apr-Jul; Saturn Rx to Taurus Jan-Feb" },
    1973: { pluto: "Libra", saturn: "Cancer", transitions: "Saturn enters Cancer Aug" },
    1974: { pluto: "Libra", saturn: "Cancer", transitions: "Saturn Rx to Gemini Jan-Apr" },
    1975: { pluto: "Libra", saturn: "Leo", transitions: "Saturn enters Leo Sep" },
    1976: { pluto: "Libra", saturn: "Leo", transitions: "Saturn Rx to Cancer Jan-Jun" },
    1977: { pluto: "Libra", saturn: "Leo", transitions: "Saturn enters Virgo Nov" },
    1978: { pluto: "Libra", saturn: "Virgo", transitions: "Saturn Rx to Leo Jan-Jul" },
    1979: { pluto: "Libra", saturn: "Virgo" },
    1980: { pluto: "Libra", saturn: "Virgo", transitions: "Saturn enters Libra Sep" },
    1981: { pluto: "Libra", saturn: "Libra" },
    1982: { pluto: "Libra", saturn: "Libra", transitions: "Saturn enters Scorpio Nov" },
    1983: { pluto: "Libra", saturn: "Scorpio", transitions: "Pluto enters Scorpio Nov; Saturn Rx to Libra May-Aug" },
    1984: { pluto: "Scorpio", saturn: "Scorpio", transitions: "Pluto Rx to Libra May-Aug" },
    1985: { pluto: "Scorpio", saturn: "Scorpio", transitions: "Saturn enters Sagittarius Nov" },
    1986: { pluto: "Scorpio", saturn: "Sagittarius" },
    1987: { pluto: "Scorpio", saturn: "Sagittarius" },
    1988: { pluto: "Scorpio", saturn: "Sagittarius", transitions: "Saturn enters Capricorn Feb (Rx to Sagittarius Jun-Nov)" },
    1989: { pluto: "Scorpio", saturn: "Capricorn" },
    1990: { pluto: "Scorpio", saturn: "Capricorn" },
    1991: { pluto: "Scorpio", saturn: "Aquarius", transitions: "Saturn enters Aquarius Feb" },
    1992: { pluto: "Scorpio", saturn: "Aquarius" },
    1993: { pluto: "Scorpio", saturn: "Aquarius", transitions: "Saturn enters Pisces May (Rx to Aquarius Jun)" },
    1994: { pluto: "Scorpio", saturn: "Pisces", transitions: "Saturn enters Pisces Jan" },
    1995: { pluto: "Sagittarius", saturn: "Pisces", transitions: "Pluto enters Sagittarius Jan (Rx to Scorpio Apr-Nov)" },
    1996: { pluto: "Sagittarius", saturn: "Aries", transitions: "Saturn enters Aries Apr" },
    1997: { pluto: "Sagittarius", saturn: "Aries" },
    1998: { pluto: "Sagittarius", saturn: "Taurus", transitions: "Saturn enters Taurus Jun (Rx to Aries Oct)" },
    1999: { pluto: "Sagittarius", saturn: "Taurus", transitions: "Saturn enters Taurus Feb" },
    2000: { pluto: "Sagittarius", saturn: "Taurus", transitions: "Saturn enters Gemini Aug (Rx to Taurus Oct)" },
    2001: { pluto: "Sagittarius", saturn: "Gemini", transitions: "Saturn enters Gemini Apr" },
    2002: { pluto: "Sagittarius", saturn: "Gemini" },
    2003: { pluto: "Sagittarius", saturn: "Cancer", transitions: "Saturn enters Cancer Jun" },
    2004: { pluto: "Sagittarius", saturn: "Cancer" },
    2005: { pluto: "Sagittarius", saturn: "Leo", transitions: "Saturn enters Leo Jul" },
    2006: { pluto: "Sagittarius", saturn: "Leo" },
    2007: { pluto: "Sagittarius", saturn: "Virgo", transitions: "Saturn enters Virgo Sep" },
    2008: { pluto: "Sagittarius", saturn: "Virgo", transitions: "Pluto enters Capricorn Jan (Rx to Sagittarius Jun-Nov)" },
    2009: { pluto: "Capricorn", saturn: "Virgo", transitions: "Saturn enters Libra Oct" },
    2010: { pluto: "Capricorn", saturn: "Libra", transitions: "Saturn Rx to Virgo Apr-Jul" },
    2011: { pluto: "Capricorn", saturn: "Libra" },
    2012: { pluto: "Capricorn", saturn: "Libra", transitions: "Saturn enters Scorpio Oct" },
    2013: { pluto: "Capricorn", saturn: "Scorpio" },
    2014: { pluto: "Capricorn", saturn: "Scorpio", transitions: "Saturn enters Sagittarius Dec" },
    2015: { pluto: "Capricorn", saturn: "Sagittarius", transitions: "Saturn Rx to Scorpio Jun-Sep" },
    2016: { pluto: "Capricorn", saturn: "Sagittarius" },
    2017: { pluto: "Capricorn", saturn: "Sagittarius", transitions: "Saturn enters Capricorn Dec" },
    2018: { pluto: "Capricorn", saturn: "Capricorn" },
    2019: { pluto: "Capricorn", saturn: "Capricorn" },
    2020: { pluto: "Capricorn", saturn: "Capricorn", transitions: "Saturn enters Aquarius Mar (Rx to Capricorn Jul-Dec)" },
    2021: { pluto: "Capricorn", saturn: "Aquarius" },
    2022: { pluto: "Capricorn", saturn: "Aquarius" },
    2023: { pluto: "Capricorn", saturn: "Pisces", transitions: "Pluto enters Aquarius Mar (Rx to Capricorn Jun); Saturn enters Pisces Mar" },
    2024: { pluto: "Aquarius", saturn: "Pisces", transitions: "Pluto enters Aquarius Jan, Rx to Capricorn Sep, returns Nov" },
    2025: { pluto: "Aquarius", saturn: "Pisces", transitions: "Saturn enters Aries May (Rx to Pisces Sep)" }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateYearGrid();
    populateYearDropdown();
});

function populateYearGrid() {
    const grid = document.getElementById('yearGrid');
    for (let year = 1900; year <= 2025; year++) {
        const btn = document.createElement('button');
        btn.className = 'year-btn';
        btn.textContent = year;
        btn.onclick = () => selectYear(year);
        grid.appendChild(btn);
    }
}

function populateYearDropdown() {
    const dropdown = document.getElementById('yearDropdown');
    for (let year = 2025; year >= 1900; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        dropdown.appendChild(option);
    }
    dropdown.onchange = (e) => {
        if (e.target.value) selectYear(parseInt(e.target.value));
    };
}

function selectYear(year) {
    const data = YEAR_DATA[year];
    if (!data) return;
    
    const plutoSign = data.pluto;
    const saturnSign = data.saturn;
    const plutoKeyword = SIGN_KEYWORDS[plutoSign];
    const saturnKeyword = SIGN_KEYWORDS[saturnSign];
    
    // Update display
    document.getElementById('selectedYear').textContent = year;
    document.getElementById('plutoSign').textContent = plutoSign;
    document.getElementById('saturnSign').textContent = saturnSign;
    document.getElementById('plutoKeyword').textContent = plutoKeyword;
    document.getElementById('saturnKeyword').textContent = saturnKeyword;
    document.getElementById('fullPhrase').textContent = 
        `"Wanting limitless ${plutoKeyword} through mastery of ${saturnKeyword}"`;
    
    // Handle transitions
    const transitionInfo = document.getElementById('transitionInfo');
    if (data.transitions) {
        document.getElementById('transitionDetails').textContent = data.transitions;
        transitionInfo.style.display = 'block';
    } else {
        transitionInfo.style.display = 'none';
    }
    
    // Update hidden form fields
    document.getElementById('formBirthYear').value = year;
    document.getElementById('formPlutoSign').value = plutoSign;
    document.getElementById('formSaturnSign').value = saturnSign;
    
    // Show results, hide selector
    document.getElementById('yearSelector').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function resetSelector() {
    document.getElementById('yearSelector').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('yearDropdown').value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}