const latencyResults = JSON.parse($persistentStore.read("latency_results") || "[]");

const content = latencyResults
    .map(result => `${result.node}: ${result.latency}ms`)
    .join("\n");

$done({
    title: "Latency < 50ms",
    content: content || "No nodes with latency < 50ms",
    icon: "network",
    "icon-color": "#5AC8FA"
});
