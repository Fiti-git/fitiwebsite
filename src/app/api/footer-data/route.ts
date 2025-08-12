import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "Awake",
        tagline: "Empowering businesses with innovative solutions. Let's create something amazing together.",
        socialLinks: [
          
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/company/fitilk"
            },
            
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" },
            { name: "Work", url: "/#work" },
            { name: "Services", url: "/#services" },
            
        ]
    },
    otherPages: {
        name: "Other Pages",
        links: [
            
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" },
    
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "40/1/C, Uguressapitiya Katugasstota SRI LANKA",
        email: "contact@fiti.solutions",
        phone: "0094 76 703 2122"
    },
    copyright: "©2025 FITI. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};