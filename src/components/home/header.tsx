"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import { useLocale } from 'next-intl';

const Header = () => {
    const [active, setActive] = useState<string | null>(null);
    const t = useTranslations('common');
    const locale = useLocale();
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" onMouseLeave={() => setActive(null)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href={`/${locale}`} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:shadow-2xl">
                            Ducologix
                        </Link>
                    </div>

                    <Menu setActive={setActive}>
                        <nav className="hidden md:flex space-x-8">                            <MenuItem setActive={setActive} active={active} item={t('services')}>
                            <div className="flex flex-col space-y-4 text-sm">
                                <ProductItem
                                    title={t('lifeSciences')}
                                    href="/life-sciences"
                                    src="https://assets.aceternity.com/demos/algochurn.webp"
                                    description="Accelerate digitization in life sciences with our industry expertise"
                                />
                                <ProductItem
                                    title="Tailwind Master Kit"
                                    href="https://tailwindmasterkit.com"
                                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                    description="Production ready Tailwind css components for your next project"
                                />
                            </div>
                        </MenuItem>
                            <MenuItem setActive={setActive} active={active} item={t("products")}>
                                <div className="  text-sm grid grid-cols-2 gap-10 p-4">                                    <ProductItem
                                    title={t('businessConsulting')}
                                    href="/business-consulting"
                                    src="https://assets.aceternity.com/demos/algochurn.webp"
                                    description="A comprehensive business consulting service to help you grow your business"
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
                        </button> */}                        <Link href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                            {t('contact')}
                        </Link>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 