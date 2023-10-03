'use client';

import { ThemeProvider } from 'next-themes';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppWrapper;
