"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuItem, HoveredLink, ProductItem } from '@/components/ui/navbar-menu';

const Header = () => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" onMouseLeave={() => setActive(null)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:shadow-2xl">
                            Ducologix
                        </Link>
                    </div>

                    <Menu setActive={setActive}>
                        <nav className="hidden md:flex space-x-8">
                            <MenuItem setActive={setActive} active={active} item="Services">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                    <HoveredLink href="/branding">Branding</HoveredLink>
                                </div>
                            </MenuItem>
                            <MenuItem setActive={setActive} active={active} item="Products">
                                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                                    <ProductItem
                                        title="Algochurn"
                                        href="https://algochurn.com"
                                        src="https://assets.aceternity.com/demos/algochurn.webp"
                                        description="Prepare for tech interviews like never before."
                                    />
                                    <ProductItem
                                        title="Tailwind Master Kit"
                                        href="https://tailwindmasterkit.com"
                                        src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                        description="Production ready Tailwind css components for your next project"
                                    />
                                    <ProductItem
                                        title="Moonbeam"
                                        href="https://gomoonbeam.com"
                                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                        description="Never write from scratch again. Go from idea to blog in minutes."
                                    />
                                    <ProductItem
                                        title="Rogue"
                                        href="https://userogue.com"
                                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                        description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                                    />
                                </div>
                            </MenuItem>
                        </nav>
                    </Menu>

                    <div className="flex items-center space-x-4">
                        {/* <button className="p-2 text-gray-700 hover:text-red-600 transition-colors">
                            <Search className="h-5 w-5" />
                        </button> */}
                        <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                            Contact
                        </Link>
                        {/* <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors">
                            <Globe className="h-4 w-4" />
                            <span>Global</span>
                        </button> */}
                        <button className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 