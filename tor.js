const ipSources = [
	'https://ident.me/', // IPv6 compatible
	'https://api.ipify.org/', // IPv4 only
	'https://api.ip.sb/ip', // IPv6 compatible
	// Add more IP sources here if needed
];

// Define sources for Tor exit nodes
const torSources = [
	'https://check.torproject.org/torbulkexitlist',
	'https://raw.githubusercontent.com/SecOps-Institute/Tor-IP-Addresses/master/tor-exit-nodes.lst',
	'https://www.dan.me.uk/torlist/?exit',
	// Add more Tor sources here if needed
];

// Regular expressions for IPv4 and IPv6 validation
const ipv4 = /((25[0-5]|(2[0-4]|1?[0-9]){1,2})\.){3}(25[0-5]|(2[0-4]|1?[0-9]){1,2})/;
const ipv6 = /^([A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;

// Function to validate IP address
const isValidIP = (ip) => ipv4.test(ip) || ipv6.test(ip);

// Function to fetch Tor exit nodes
const fetchTorExitNodes = async() => {
	for (const s of torSources) {
		try {
			const response = await fetch(s);
			if (response.ok) {
				return (await response.text()).split('\n');
			}
		} catch (error) {
			console.error(`Error fetching Tor exit nodes from ${s}:`, error);
		}
	}
	return [];
};

// Function to normalize IPv6 addresses
const normalizeIPv6 = (ip) => {
	if (ip.includes(':')) {
		return ip.split(':').map(part => {
			if (part.length < 4) {
				return '0'.repeat(4 - part.length) + part;
			} else {
				return part;
			}
		}).join(':');
	}
	return ip;
};

// Function to fetch the public IP address
const getPublicIP = async() => {
	for (const s of ipSources) {
		try {
			const response = await fetch(s);
			const ip = await response.text();
			if (ipv6.test(ip)) {
				return normalizeIPv6(ip);
			}
			return ip.trim();
		} catch (error) {
			console.error(`Error fetching IP from ${s}:`, error);
		}
	}
	return 'N/A';
};

// Function to check if an IP is a Tor exit node
const isTor = (ip, data) => {
	if (typeof ip === 'string' && isValidIP(ip)) {
		if (ipv4.test(ip)) {
			ip = ip.split('.').map(p => parseInt(p, 10)).join('.');
		}
		return data.includes(ip);
	} else {
		console.error('Invalid IP:', ip);
		return false;
	}
};