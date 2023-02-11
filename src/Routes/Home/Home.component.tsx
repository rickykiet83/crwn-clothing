import Directory from '@components/directory/directory.component';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function Home() {
	return (
		<div>
			<Directory />
			<Outlet />
		</div>
	);
}
