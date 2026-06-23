const Footer = () => {
    return (
        <footer className="w-full py-12 bg-surface-container-lowest border-t border-white/5 mt-12 relative z-10 lg:pl-64">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="font-display-lg text-headline-lg-mobile text-primary tracking-tighter">Mythic Events</span>
                    <p className="font-body-md text-label-sm text-on-surface-variant">© 2026 Mythic Events. Bridging Digital & Tactile Worlds.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    <a className="font-body-md text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
                    <a className="font-body-md text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
                    <a className="font-body-md text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Us</a>
                    <a className="font-body-md text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Partner Program</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
