const nodes = $surge.selectGroup("Proxy"); // 获取所有节点信息

async function updateLatency() {
    const results = [];

    for (let node of nodes) {
        let startTime = Date.now();
        try {
            await $httpClient.head({
                url: "http://www.gstatic.com/generate_204",
                policy: node
            });
            let latency = Date.now() - startTime;
            if (latency < 250) {
                results.push({ node, latency });
            }
        } catch (error) {
            // 如果网络请求失败，跳过该节点
        }
    }

    // 保存结果
    $persistentStore.write(JSON.stringify(results), "latency_results");
    $done();
}

updateLatency();
