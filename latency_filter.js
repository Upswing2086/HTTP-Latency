const latencyResults = JSON.parse($persistentStore.read("latency_results") || "[]");

const content = latencyResults
    .map(result => `${result.node}: ${result.latency}ms`)
    .join("\n");

$done({
    title: "Latency < 250ms",
    content: content || "No nodes with latency < 250ms",
    icon: "network",
    "icon-color": "#5AC8FA"
});
