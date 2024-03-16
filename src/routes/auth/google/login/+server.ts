// routes/login/github/+server.ts
import { google } from '$lib/server/auth';
import { generateState, generateCodeVerifier } from 'arctic';
import { redirect } from '@sveltejs/kit';

import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	const state = generateState();
	const code = generateCodeVerifier();
	const url = await google.createAuthorizationURL(state, code,{
		scopes: ['openid','email', 'profile'],
	});

	// extra configrations for google
	url.searchParams.set('access_type', 'offline');
	url.searchParams.set('prompt', 'consent');
	url.searchParams.set('include_granted_scopes', 'true');

	event.cookies.set('google_oauth_state', state, {
		path: '/',
		secure: import.meta.env.PROD,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	event.cookies.set('google_oauth_code', code, {
		path: '/',
		secure: import.meta.env.PROD,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});
	
	return redirect(302, url.toString());
}
