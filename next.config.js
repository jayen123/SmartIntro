module.exports = {
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.cache = {
                type: 'filesystem',
            };
        }

        return config;
    },
};