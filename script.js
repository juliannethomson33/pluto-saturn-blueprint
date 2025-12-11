// Pluto-Saturn Data (1900-2025)
// Bright Side Astrology
// All transitional years audited - no gaps, no overlaps

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

const YEAR_DATA = {
    1900: { 
        transitional: true,
        combos: [
            { months: "Jan - Sep", pluto: "Gemini", saturn: "Sagittarius" },
            { months: "Oct - Dec", pluto: "Gemini", saturn: "Capricorn" }
        ]
    },
    1901: { transitional: false, pluto: "Gemini", saturn: "Capricorn" },
    1902: { transitional: false, pluto: "Gemini", saturn: "Capricorn" },
    1903: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Gemini", saturn: "Capricorn" },
            { months: "Feb - Dec", pluto: "Gemini", saturn: "Aquarius" }
        ]
    },
    1904: { transitional: false, pluto: "Gemini", saturn: "Aquarius" },
    1905: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Gemini", saturn: "Aquarius" },
            { months: "Apr - Jul", pluto: "Gemini", saturn: "Pisces" },
            { months: "Aug - Dec", pluto: "Gemini", saturn: "Aquarius" }
        ]
    },
    1906: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Gemini", saturn: "Aquarius" },
            { months: "Feb - Dec", pluto: "Gemini", saturn: "Pisces" }
        ]
    },
    1907: { transitional: false, pluto: "Gemini", saturn: "Pisces" },
    1908: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Gemini", saturn: "Pisces" },
            { months: "Mar - May", pluto: "Gemini", saturn: "Aries" },
            { months: "Jun - Sep", pluto: "Gemini", saturn: "Pisces" },
            { months: "Oct - Dec", pluto: "Gemini", saturn: "Aries" }
        ]
    },
    1909: { transitional: false, pluto: "Gemini", saturn: "Aries" },
    1910: { 
        transitional: true,
        combos: [
            { months: "Jan - Apr", pluto: "Gemini", saturn: "Aries" },
            { months: "May - Dec", pluto: "Gemini", saturn: "Taurus" }
        ]
    },
    1911: { transitional: false, pluto: "Gemini", saturn: "Taurus" },
    1912: { 
        transitional: true,
        combos: [
            { months: "Jan - Jun", pluto: "Gemini", saturn: "Taurus" },
            { months: "Jul - Oct", pluto: "Gemini", saturn: "Gemini" },
            { months: "Nov - Dec", pluto: "Gemini", saturn: "Taurus" }
        ]
    },
    1913: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Gemini", saturn: "Taurus" },
            { months: "Mar - Aug", pluto: "Gemini", saturn: "Gemini" },
            { months: "Sep - Dec", pluto: "Cancer", saturn: "Gemini" }
        ]
    },
    1914: { 
        transitional: true,
        combos: [
            { months: "Jan - Apr", pluto: "Gemini", saturn: "Gemini" },
            { months: "May - Jul", pluto: "Cancer", saturn: "Gemini" },
            { months: "Aug - Dec", pluto: "Cancer", saturn: "Cancer" }
        ]
    },
    1915: { transitional: false, pluto: "Cancer", saturn: "Cancer" },
    1916: { 
        transitional: true,
        combos: [
            { months: "Jan - Sep", pluto: "Cancer", saturn: "Cancer" },
            { months: "Oct - Dec", pluto: "Cancer", saturn: "Leo" }
        ]
    },
    1917: { transitional: false, pluto: "Cancer", saturn: "Leo" },
    1918: { transitional: false, pluto: "Cancer", saturn: "Leo" },
    1919: { 
        transitional: true,
        combos: [
            { months: "Jan - Jul", pluto: "Cancer", saturn: "Leo" },
            { months: "Aug - Dec", pluto: "Cancer", saturn: "Virgo" }
        ]
    },
    1920: { transitional: false, pluto: "Cancer", saturn: "Virgo" },
    1921: { 
        transitional: true,
        combos: [
            { months: "Jan - Sep", pluto: "Cancer", saturn: "Virgo" },
            { months: "Oct - Dec", pluto: "Cancer", saturn: "Libra" }
        ]
    },
    1922: { transitional: false, pluto: "Cancer", saturn: "Libra" },
    1923: { 
        transitional: true,
        combos: [
            { months: "Jan - Nov", pluto: "Cancer", saturn: "Libra" },
            { months: "Dec", pluto: "Cancer", saturn: "Scorpio" }
        ]
    },
    1924: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Cancer", saturn: "Scorpio" },
            { months: "Apr - Aug", pluto: "Cancer", saturn: "Libra" },
            { months: "Sep - Dec", pluto: "Cancer", saturn: "Scorpio" }
        ]
    },
    1925: { transitional: false, pluto: "Cancer", saturn: "Scorpio" },
    1926: { 
        transitional: true,
        combos: [
            { months: "Jan - Nov", pluto: "Cancer", saturn: "Scorpio" },
            { months: "Dec", pluto: "Cancer", saturn: "Sagittarius" }
        ]
    },
    1927: { transitional: false, pluto: "Cancer", saturn: "Sagittarius" },
    1928: { transitional: false, pluto: "Cancer", saturn: "Sagittarius" },
    1929: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Cancer", saturn: "Sagittarius" },
            { months: "Mar - Apr", pluto: "Cancer", saturn: "Capricorn" },
            { months: "May - Oct", pluto: "Cancer", saturn: "Sagittarius" },
            { months: "Nov - Dec", pluto: "Cancer", saturn: "Capricorn" }
        ]
    },
    1930: { transitional: false, pluto: "Cancer", saturn: "Capricorn" },
    1931: { transitional: false, pluto: "Cancer", saturn: "Capricorn" },
    1932: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Cancer", saturn: "Capricorn" },
            { months: "Feb - Jul", pluto: "Cancer", saturn: "Aquarius" },
            { months: "Aug - Oct", pluto: "Cancer", saturn: "Capricorn" },
            { months: "Nov - Dec", pluto: "Cancer", saturn: "Aquarius" }
        ]
    },
    1933: { transitional: false, pluto: "Cancer", saturn: "Aquarius" },
    1934: { transitional: false, pluto: "Cancer", saturn: "Aquarius" },
    1935: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Cancer", saturn: "Aquarius" },
            { months: "Feb - Dec", pluto: "Cancer", saturn: "Pisces" }
        ]
    },
    1936: { transitional: false, pluto: "Cancer", saturn: "Pisces" },
    1937: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Cancer", saturn: "Pisces" },
            { months: "Apr - Sep", pluto: "Cancer", saturn: "Aries" },
            { months: "Oct - Dec", pluto: "Leo", saturn: "Aries" }
        ]
    },
    1938: { 
        transitional: true,
        combos: [
            { months: "Jan - Jul", pluto: "Cancer", saturn: "Aries" },
            { months: "Aug - Dec", pluto: "Leo", saturn: "Aries" }
        ]
    },
    1939: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Leo", saturn: "Aries" },
            { months: "Feb - May", pluto: "Cancer", saturn: "Aries" },
            { months: "Jun", pluto: "Leo", saturn: "Aries" },
            { months: "Jul - Aug", pluto: "Leo", saturn: "Taurus" },
            { months: "Sep - Dec", pluto: "Leo", saturn: "Aries" }
        ]
    },
    1940: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Leo", saturn: "Aries" },
            { months: "Mar - Dec", pluto: "Leo", saturn: "Taurus" }
        ]
    },
    1941: { transitional: false, pluto: "Leo", saturn: "Taurus" },
    1942: { 
        transitional: true,
        combos: [
            { months: "Jan - Apr", pluto: "Leo", saturn: "Taurus" },
            { months: "May - Dec", pluto: "Leo", saturn: "Gemini" }
        ]
    },
    1943: { transitional: false, pluto: "Leo", saturn: "Gemini" },
    1944: { 
        transitional: true,
        combos: [
            { months: "Jan - May", pluto: "Leo", saturn: "Gemini" },
            { months: "Jun - Dec", pluto: "Leo", saturn: "Cancer" }
        ]
    },
    1945: { transitional: false, pluto: "Leo", saturn: "Cancer" },
    1946: { 
        transitional: true,
        combos: [
            { months: "Jan - Jul", pluto: "Leo", saturn: "Cancer" },
            { months: "Aug - Dec", pluto: "Leo", saturn: "Leo" }
        ]
    },
    1947: { transitional: false, pluto: "Leo", saturn: "Leo" },
    1948: { 
        transitional: true,
        combos: [
            { months: "Jan - Aug", pluto: "Leo", saturn: "Leo" },
            { months: "Sep - Dec", pluto: "Leo", saturn: "Virgo" }
        ]
    },
    1949: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Leo", saturn: "Virgo" },
            { months: "Apr", pluto: "Leo", saturn: "Leo" },
            { months: "May - Dec", pluto: "Leo", saturn: "Virgo" }
        ]
    },
    1950: { 
        transitional: true,
        combos: [
            { months: "Jan - Oct", pluto: "Leo", saturn: "Virgo" },
            { months: "Nov - Dec", pluto: "Leo", saturn: "Libra" }
        ]
    },
    1951: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Leo", saturn: "Libra" },
            { months: "Mar - Jul", pluto: "Leo", saturn: "Virgo" },
            { months: "Aug - Dec", pluto: "Leo", saturn: "Libra" }
        ]
    },
    1952: { transitional: false, pluto: "Leo", saturn: "Libra" },
    1953: { 
        transitional: true,
        combos: [
            { months: "Jan - Sep", pluto: "Leo", saturn: "Libra" },
            { months: "Oct - Dec", pluto: "Leo", saturn: "Scorpio" }
        ]
    },
    1954: { transitional: false, pluto: "Leo", saturn: "Scorpio" },
    1955: { transitional: false, pluto: "Leo", saturn: "Scorpio" },
    1956: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Leo", saturn: "Scorpio" },
            { months: "Feb - Apr", pluto: "Leo", saturn: "Sagittarius" },
            { months: "May - Sep", pluto: "Leo", saturn: "Scorpio" },
            { months: "Oct - Dec", pluto: "Leo", saturn: "Sagittarius" }
        ]
    },
    1957: { 
        transitional: true,
        combos: [
            { months: "Jan - Jul", pluto: "Leo", saturn: "Sagittarius" },
            { months: "Aug - Dec", pluto: "Virgo", saturn: "Sagittarius" }
        ]
    },
    1958: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Virgo", saturn: "Sagittarius" },
            { months: "Apr - May", pluto: "Leo", saturn: "Sagittarius" },
            { months: "Jun - Dec", pluto: "Virgo", saturn: "Sagittarius" }
        ]
    },
    1959: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Virgo", saturn: "Sagittarius" },
            { months: "Feb - Dec", pluto: "Virgo", saturn: "Capricorn" }
        ]
    },
    1960: { transitional: false, pluto: "Virgo", saturn: "Capricorn" },
    1961: { transitional: false, pluto: "Virgo", saturn: "Capricorn" },
    1962: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Virgo", saturn: "Capricorn" },
            { months: "Feb - Dec", pluto: "Virgo", saturn: "Aquarius" }
        ]
    },
    1963: { transitional: false, pluto: "Virgo", saturn: "Aquarius" },
    1964: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Virgo", saturn: "Aquarius" },
            { months: "Mar - Aug", pluto: "Virgo", saturn: "Pisces" },
            { months: "Sep - Dec", pluto: "Virgo", saturn: "Aquarius" }
        ]
    },
    1965: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Virgo", saturn: "Aquarius" },
            { months: "Feb - Dec", pluto: "Virgo", saturn: "Pisces" }
        ]
    },
    1966: { transitional: false, pluto: "Virgo", saturn: "Pisces" },
    1967: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Virgo", saturn: "Pisces" },
            { months: "Mar - Dec", pluto: "Virgo", saturn: "Aries" }
        ]
    },
    1968: { transitional: false, pluto: "Virgo", saturn: "Aries" },
    1969: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Virgo", saturn: "Aries" },
            { months: "Apr - Dec", pluto: "Virgo", saturn: "Taurus" }
        ]
    },
    1970: { transitional: false, pluto: "Virgo", saturn: "Taurus" },
    1971: { 
        transitional: true,
        combos: [
            { months: "Jan - May", pluto: "Virgo", saturn: "Taurus" },
            { months: "Jun - Sep", pluto: "Virgo", saturn: "Gemini" },
            { months: "Oct - Dec", pluto: "Libra", saturn: "Gemini" }
        ]
    },
    1972: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Libra", saturn: "Taurus" },
            { months: "Feb - Jun", pluto: "Libra", saturn: "Gemini" },
            { months: "Jul - Dec", pluto: "Libra", saturn: "Gemini" }
        ]
    },
    1973: { 
        transitional: true,
        combos: [
            { months: "Jan - Jul", pluto: "Libra", saturn: "Gemini" },
            { months: "Aug - Dec", pluto: "Libra", saturn: "Cancer" }
        ]
    },
    1974: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Libra", saturn: "Gemini" },
            { months: "Apr - Dec", pluto: "Libra", saturn: "Cancer" }
        ]
    },
    1975: { 
        transitional: true,
        combos: [
            { months: "Jan - Aug", pluto: "Libra", saturn: "Cancer" },
            { months: "Sep - Dec", pluto: "Libra", saturn: "Leo" }
        ]
    },
    1976: { 
        transitional: true,
        combos: [
            { months: "Jan - May", pluto: "Libra", saturn: "Cancer" },
            { months: "Jun - Dec", pluto: "Libra", saturn: "Leo" }
        ]
    },
    1977: { 
        transitional: true,
        combos: [
            { months: "Jan - Oct", pluto: "Libra", saturn: "Leo" },
            { months: "Nov - Dec", pluto: "Libra", saturn: "Virgo" }
        ]
    },
    1978: { 
        transitional: true,
        combos: [
            { months: "Jan - Jun", pluto: "Libra", saturn: "Leo" },
            { months: "Jul - Dec", pluto: "Libra", saturn: "Virgo" }
        ]
    },
    1979: { transitional: false, pluto: "Libra", saturn: "Virgo" },
    1980: { 
        transitional: true,
        combos: [
            { months: "Jan - Aug", pluto: "Libra", saturn: "Virgo" },
            { months: "Sep - Dec", pluto: "Libra", saturn: "Libra" }
        ]
    },
    1981: { transitional: false, pluto: "Libra", saturn: "Libra" },
    1982: { 
        transitional: true,
        combos: [
            { months: "Jan - Oct", pluto: "Libra", saturn: "Libra" },
            { months: "Nov - Dec", pluto: "Libra", saturn: "Scorpio" }
        ]
    },
    1983: { 
        transitional: true,
        combos: [
            { months: "Jan - Apr", pluto: "Libra", saturn: "Scorpio" },
            { months: "May - Jul", pluto: "Libra", saturn: "Libra" },
            { months: "Aug - Oct", pluto: "Libra", saturn: "Scorpio" },
            { months: "Nov - Dec", pluto: "Scorpio", saturn: "Scorpio" }
        ]
    },
    1984: { 
        transitional: true,
        combos: [
            { months: "Jan - Apr", pluto: "Scorpio", saturn: "Scorpio" },
            { months: "May - Jul", pluto: "Libra", saturn: "Scorpio" },
            { months: "Aug - Dec", pluto: "Scorpio", saturn: "Scorpio" }
        ]
    },
    1985: { 
        transitional: true,
        combos: [
            { months: "Jan - Oct", pluto: "Scorpio", saturn: "Scorpio" },
            { months: "Nov - Dec", pluto: "Scorpio", saturn: "Sagittarius" }
        ]
    },
    1986: { transitional: false, pluto: "Scorpio", saturn: "Sagittarius" },
    1987: { transitional: false, pluto: "Scorpio", saturn: "Sagittarius" },
    1988: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Scorpio", saturn: "Sagittarius" },
            { months: "Feb - May", pluto: "Scorpio", saturn: "Capricorn" },
            { months: "Jun - Oct", pluto: "Scorpio", saturn: "Sagittarius" },
            { months: "Nov - Dec", pluto: "Scorpio", saturn: "Capricorn" }
        ]
    },
    1989: { transitional: false, pluto: "Scorpio", saturn: "Capricorn" },
    1990: { transitional: false, pluto: "Scorpio", saturn: "Capricorn" },
    1991: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Scorpio", saturn: "Capricorn" },
            { months: "Feb - Dec", pluto: "Scorpio", saturn: "Aquarius" }
        ]
    },
    1992: { transitional: false, pluto: "Scorpio", saturn: "Aquarius" },
    1993: { 
        transitional: true,
        combos: [
            { months: "Jan - Apr", pluto: "Scorpio", saturn: "Aquarius" },
            { months: "May - Jun", pluto: "Scorpio", saturn: "Pisces" },
            { months: "Jul - Dec", pluto: "Scorpio", saturn: "Aquarius" }
        ]
    },
    1994: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Scorpio", saturn: "Aquarius" },
            { months: "Feb - Dec", pluto: "Scorpio", saturn: "Pisces" }
        ]
    },
    1995: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Scorpio", saturn: "Pisces" },
            { months: "Apr - Oct", pluto: "Sagittarius", saturn: "Pisces" },
            { months: "Nov - Dec", pluto: "Scorpio", saturn: "Pisces" }
        ]
    },
    1996: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Sagittarius", saturn: "Pisces" },
            { months: "Apr - Dec", pluto: "Sagittarius", saturn: "Aries" }
        ]
    },
    1997: { transitional: false, pluto: "Sagittarius", saturn: "Aries" },
    1998: { 
        transitional: true,
        combos: [
            { months: "Jan - May", pluto: "Sagittarius", saturn: "Aries" },
            { months: "Jun - Sep", pluto: "Sagittarius", saturn: "Taurus" },
            { months: "Oct - Dec", pluto: "Sagittarius", saturn: "Aries" }
        ]
    },
    1999: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Sagittarius", saturn: "Aries" },
            { months: "Mar - Dec", pluto: "Sagittarius", saturn: "Taurus" }
        ]
    },
    2000: { 
        transitional: true,
        combos: [
            { months: "Jan - Jul", pluto: "Sagittarius", saturn: "Taurus" },
            { months: "Aug - Sep", pluto: "Sagittarius", saturn: "Gemini" },
            { months: "Oct - Dec", pluto: "Sagittarius", saturn: "Taurus" }
        ]
    },
    2001: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Sagittarius", saturn: "Taurus" },
            { months: "Apr - Dec", pluto: "Sagittarius", saturn: "Gemini" }
        ]
    },
    2002: { transitional: false, pluto: "Sagittarius", saturn: "Gemini" },
    2003: { 
        transitional: true,
        combos: [
            { months: "Jan - May", pluto: "Sagittarius", saturn: "Gemini" },
            { months: "Jun - Dec", pluto: "Sagittarius", saturn: "Cancer" }
        ]
    },
    2004: { transitional: false, pluto: "Sagittarius", saturn: "Cancer" },
    2005: { 
        transitional: true,
        combos: [
            { months: "Jan - Jun", pluto: "Sagittarius", saturn: "Cancer" },
            { months: "Jul - Dec", pluto: "Sagittarius", saturn: "Leo" }
        ]
    },
    2006: { transitional: false, pluto: "Sagittarius", saturn: "Leo" },
    2007: { 
        transitional: true,
        combos: [
            { months: "Jan - Aug", pluto: "Sagittarius", saturn: "Leo" },
            { months: "Sep - Dec", pluto: "Sagittarius", saturn: "Virgo" }
        ]
    },
    2008: { 
        transitional: true,
        combos: [
            { months: "Jan - May", pluto: "Capricorn", saturn: "Virgo" },
            { months: "Jun - Oct", pluto: "Sagittarius", saturn: "Virgo" },
            { months: "Nov - Dec", pluto: "Capricorn", saturn: "Virgo" }
        ]
    },
    2009: { 
        transitional: true,
        combos: [
            { months: "Jan - Sep", pluto: "Capricorn", saturn: "Virgo" },
            { months: "Oct - Dec", pluto: "Capricorn", saturn: "Libra" }
        ]
    },
    2010: { 
        transitional: true,
        combos: [
            { months: "Jan - Mar", pluto: "Capricorn", saturn: "Libra" },
            { months: "Apr - Jun", pluto: "Capricorn", saturn: "Virgo" },
            { months: "Jul - Dec", pluto: "Capricorn", saturn: "Libra" }
        ]
    },
    2011: { transitional: false, pluto: "Capricorn", saturn: "Libra" },
    2012: { 
        transitional: true,
        combos: [
            { months: "Jan - Sep", pluto: "Capricorn", saturn: "Libra" },
            { months: "Oct - Dec", pluto: "Capricorn", saturn: "Scorpio" }
        ]
    },
    2013: { transitional: false, pluto: "Capricorn", saturn: "Scorpio" },
    2014: { 
        transitional: true,
        combos: [
            { months: "Jan - Nov", pluto: "Capricorn", saturn: "Scorpio" },
            { months: "Dec", pluto: "Capricorn", saturn: "Sagittarius" }
        ]
    },
    2015: { 
        transitional: true,
        combos: [
            { months: "Jan - May", pluto: "Capricorn", saturn: "Sagittarius" },
            { months: "Jun - Aug", pluto: "Capricorn", saturn: "Scorpio" },
            { months: "Sep - Dec", pluto: "Capricorn", saturn: "Sagittarius" }
        ]
    },
    2016: { transitional: false, pluto: "Capricorn", saturn: "Sagittarius" },
    2017: { 
        transitional: true,
        combos: [
            { months: "Jan - Nov", pluto: "Capricorn", saturn: "Sagittarius" },
            { months: "Dec", pluto: "Capricorn", saturn: "Capricorn" }
        ]
    },
    2018: { transitional: false, pluto: "Capricorn", saturn: "Capricorn" },
    2019: { transitional: false, pluto: "Capricorn", saturn: "Capricorn" },
    2020: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Capricorn", saturn: "Capricorn" },
            { months: "Mar - Jun", pluto: "Capricorn", saturn: "Aquarius" },
            { months: "Jul - Dec", pluto: "Capricorn", saturn: "Capricorn" }
        ]
    },
    2021: { 
        transitional: true,
        combos: [
            { months: "Jan", pluto: "Capricorn", saturn: "Capricorn" },
            { months: "Feb - Dec", pluto: "Capricorn", saturn: "Aquarius" }
        ]
    },
    2022: { transitional: false, pluto: "Capricorn", saturn: "Aquarius" },
    2023: { 
        transitional: true,
        combos: [
            { months: "Jan - Feb", pluto: "Capricorn", saturn: "Aquarius" },
            { months: "Mar - May", pluto: "Aquarius", saturn: "Pisces" },
            { months: "Jun - Dec", pluto: "Capricorn", saturn: "Pisces" }
        ]
    },
    2024: { 
        transitional: true,
        combos: [
            { months: "Jan - Aug", pluto: "Aquarius", saturn: "Pisces" },
            { months: "Sep - Oct", pluto: "Capricorn", saturn: "Pisces" },
            { months: "Nov - Dec", pluto: "Aquarius", saturn: "Pisces" }
        ]
    },
    2025: { 
        transitional: true,
        combos: [
            { months: "Jan - Apr", pluto: "Aquarius", saturn: "Pisces" },
            { months: "May - Aug", pluto: "Aquarius", saturn: "Aries" },
            { months: "Sep - Dec", pluto: "Aquarius", saturn: "Pisces" }
        ]
    }
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

function createPhrase(plutoSign, saturnSign) {
    const plutoKeyword = SIGN_KEYWORDS[plutoSign];
    const saturnKeyword = SIGN_KEYWORDS[saturnSign];
    return `Wanting limitless ${plutoKeyword} through mastering ${saturnKeyword}`;
}

function selectYear(year) {
    const data = YEAR_DATA[year];
    if (!data) return;
    
    document.getElementById('results').style.display = 'none';
    document.getElementById('resultsTransitional').style.display = 'none';
    document.getElementById('yearSelector').style.display = 'none';
    
    if (data.transitional) {
        showTransitionalResults(year, data);
    } else {
        showSimpleResults(year, data);
    }
}

function showSimpleResults(year, data) {
    const plutoSign = data.pluto;
    const saturnSign = data.saturn;
    const plutoKeyword = SIGN_KEYWORDS[plutoSign];
    const saturnKeyword = SIGN_KEYWORDS[saturnSign];
    
    document.getElementById('selectedYear').textContent = year;
    document.getElementById('plutoSign').textContent = plutoSign;
    document.getElementById('saturnSign').textContent = saturnSign;
    document.getElementById('plutoKeyword').textContent = plutoKeyword;
    document.getElementById('saturnKeyword').textContent = saturnKeyword;
    document.getElementById('fullPhrase').textContent = createPhrase(plutoSign, saturnSign);
    
    document.getElementById('formBirthYear').value = year;
    document.getElementById('formPlutoSign').value = plutoSign;
    document.getElementById('formSaturnSign').value = saturnSign;
    
    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function showTransitionalResults(year, data) {
    document.getElementById('selectedYearTrans').textContent = year;
    
    const combos = data.combos;
    
    const uniqueCombos = [];
    const seen = new Set();
    
    for (const combo of combos) {
        const key = `${combo.pluto}-${combo.saturn}`;
        if (!seen.has(key)) {
            seen.add(key);
            uniqueCombos.push(combo);
        }
    }
    
    if (uniqueCombos[0]) {
        document.getElementById('combo1Header').textContent = `If born ${uniqueCombos[0].months}:`;
        document.getElementById('plutoSign1').textContent = uniqueCombos[0].pluto;
        document.getElementById('saturnSign1').textContent = uniqueCombos[0].saturn;
        document.getElementById('plutoKeyword1').textContent = SIGN_KEYWORDS[uniqueCombos[0].pluto];
        document.getElementById('saturnKeyword1').textContent = SIGN_KEYWORDS[uniqueCombos[0].saturn];
        document.getElementById('fullPhrase1').textContent = createPhrase(uniqueCombos[0].pluto, uniqueCombos[0].saturn);
        document.getElementById('combo1').style.display = 'block';
    }
    
    if (uniqueCombos[1]) {
        document.getElementById('combo2Header').textContent = `If born ${uniqueCombos[1].months}:`;
        document.getElementById('plutoSign2').textContent = uniqueCombos[1].pluto;
        document.getElementById('saturnSign2').textContent = uniqueCombos[1].saturn;
        document.getElementById('plutoKeyword2').textContent = SIGN_KEYWORDS[uniqueCombos[1].pluto];
        document.getElementById('saturnKeyword2').textContent = SIGN_KEYWORDS[uniqueCombos[1].saturn];
        document.getElementById('fullPhrase2').textContent = createPhrase(uniqueCombos[1].pluto, uniqueCombos[1].saturn);
        document.getElementById('combo2').style.display = 'block';
    } else {
        document.getElementById('combo2').style.display = 'none';
    }
    
    if (uniqueCombos[2]) {
        document.getElementById('combo3Header').textContent = `If born ${uniqueCombos[2].months}:`;
        document.getElementById('plutoSign3').textContent = uniqueCombos[2].pluto;
        document.getElementById('saturnSign3').textContent = uniqueCombos[2].saturn;
        document.getElementById('plutoKeyword3').textContent = SIGN_KEYWORDS[uniqueCombos[2].pluto];
        document.getElementById('saturnKeyword3').textContent = SIGN_KEYWORDS[uniqueCombos[2].saturn];
        document.getElementById('fullPhrase3').textContent = createPhrase(uniqueCombos[2].pluto, uniqueCombos[2].saturn);
        document.getElementById('combo3').style.display = 'block';
    } else {
        document.getElementById('combo3').style.display = 'none';
    }
    
    document.getElementById('formBirthYearTrans').value = year;
    document.getElementById('formCombinations').value = uniqueCombos.map(c => `${c.pluto}/${c.saturn}`).join('; ');
    
    document.getElementById('resultsTransitional').style.display = 'block';
    document.getElementById('resultsTransitional').scrollIntoView({ behavior: 'smooth' });
}

function resetSelector() {
    document.getElementById('yearSelector').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('resultsTransitional').style.display = 'none';
    document.getElementById('yearDropdown').value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
