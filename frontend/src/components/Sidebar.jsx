import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col h-screen fixed left-0 top-16 w-64 bg-surface-container-low/80 backdrop-blur-lg border-r border-white/5">
            <div className="flex flex-col gap-4 p-gutter h-full pb-20">
                {/* Header */}
                <div className="mb-4 px-2">
                    <h2 className="font-body-md text-body-md text-on-surface font-bold">Categories</h2>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 opacity-70">Filter your discovery</p>
                </div>

                {/* Tabs */}
                <nav className="flex-1 flex flex-col gap-2">
                    <a className="flex items-center gap-3 px-4 py-3 rounded-r-lg font-label-sm text-label-sm bg-primary-container/20 text-primary border-r-4 border-primary cursor-pointer select-none hover:translate-x-1 transition-transform duration-200" href="#">
                        <span className="material-symbols-outlined">casino</span>
                        <span>All Games</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-white/5 cursor-pointer select-none hover:translate-x-1 transition-transform duration-200" href="#">
                        <span className="material-symbols-outlined">style</span>
                        <span>Trading Cards</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-white/5 cursor-pointer select-none hover:translate-x-1 transition-transform duration-200" href="#">
                        <span className="material-symbols-outlined">add_home</span>
                        <span>Board Games</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-white/5 cursor-pointer select-none hover:translate-x-1 transition-transform duration-200" href="#">
                        <span className="material-symbols-outlined">extension</span>
                        <span>Strategy</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-white/5 cursor-pointer select-none hover:translate-x-1 transition-transform duration-200" href="#">
                        <span className="material-symbols-outlined">rocket_launch</span>
                        <span>Casual</span>
                    </a>
                </nav>

                {/* Footer Tabs */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-col gap-2">
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-white/5 cursor-pointer select-none hover:translate-x-1 transition-transform duration-200" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span>Settings</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:bg-white/5 cursor-pointer select-none hover:translate-x-1 transition-transform duration-200" href="#">
                            <span className="material-symbols-outlined">help</span>
                            <span>Support</span>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
