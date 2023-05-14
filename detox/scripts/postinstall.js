	require('child_process').execFileSync(`${__dirname}/build_framework.ios.sh`, {
		stdio: 'inherit'
	});
}
