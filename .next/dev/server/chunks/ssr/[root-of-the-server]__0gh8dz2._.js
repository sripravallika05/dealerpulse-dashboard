module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/data/dealership_data.json.[json].cjs [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "leads": [
        {
            "id": 1,
            "name": "Customer A",
            "branch": "Hyderabad",
            "sales_rep": "Rahul",
            "status": "delivered",
            "price": 800000,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-06-01"
                },
                {
                    "status": "contacted",
                    "date": "2025-06-02"
                },
                {
                    "status": "test_drive",
                    "date": "2025-06-05"
                },
                {
                    "status": "booked",
                    "date": "2025-06-07"
                },
                {
                    "status": "delivered",
                    "date": "2025-06-10"
                }
            ]
        },
        {
            "id": 2,
            "name": "Customer B",
            "branch": "Chennai",
            "sales_rep": "Anjali",
            "status": "lost",
            "price": 0,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-06-03"
                },
                {
                    "status": "contacted",
                    "date": "2025-06-04"
                },
                {
                    "status": "lost",
                    "date": "2025-06-10"
                }
            ]
        },
        {
            "id": 3,
            "name": "Customer C",
            "branch": "Bangalore",
            "sales_rep": "Kiran",
            "status": "test_drive",
            "price": 600000,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-07-01"
                },
                {
                    "status": "contacted",
                    "date": "2025-07-02"
                },
                {
                    "status": "test_drive",
                    "date": "2025-07-10"
                }
            ]
        },
        {
            "id": 4,
            "name": "Customer D",
            "branch": "Mumbai",
            "sales_rep": "Sneha",
            "status": "booked",
            "price": 900000,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-07-05"
                },
                {
                    "status": "contacted",
                    "date": "2025-07-06"
                },
                {
                    "status": "test_drive",
                    "date": "2025-07-08"
                },
                {
                    "status": "booked",
                    "date": "2025-07-12"
                }
            ]
        },
        {
            "id": 5,
            "name": "Customer E",
            "branch": "Hyderabad",
            "sales_rep": "Rahul",
            "status": "contacted",
            "price": 750000,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-08-01"
                },
                {
                    "status": "contacted",
                    "date": "2025-08-03"
                }
            ]
        },
        {
            "id": 6,
            "name": "Customer F",
            "branch": "Chennai",
            "sales_rep": "Anjali",
            "status": "delivered",
            "price": 820000,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-08-02"
                },
                {
                    "status": "contacted",
                    "date": "2025-08-04"
                },
                {
                    "status": "test_drive",
                    "date": "2025-08-06"
                },
                {
                    "status": "booked",
                    "date": "2025-08-08"
                },
                {
                    "status": "delivered",
                    "date": "2025-08-12"
                }
            ]
        },
        {
            "id": 7,
            "name": "Customer G",
            "branch": "Mumbai",
            "sales_rep": "Sneha",
            "status": "lost",
            "price": 0,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-09-01"
                },
                {
                    "status": "contacted",
                    "date": "2025-09-02"
                },
                {
                    "status": "lost",
                    "date": "2025-09-05"
                }
            ]
        },
        {
            "id": 8,
            "name": "Customer H",
            "branch": "Bangalore",
            "sales_rep": "Kiran",
            "status": "delivered",
            "price": 670000,
            "status_history": [
                {
                    "status": "new",
                    "date": "2025-09-03"
                },
                {
                    "status": "contacted",
                    "date": "2025-09-04"
                },
                {
                    "status": "test_drive",
                    "date": "2025-09-06"
                },
                {
                    "status": "booked",
                    "date": "2025-09-08"
                },
                {
                    "status": "delivered",
                    "date": "2025-09-12"
                }
            ]
        }
    ]
};
}),
"[project]/components/KPIcards.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KPIcards
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function KPIcards({ leads }) {
    const totalLeads = leads.length;
    const delivered = leads.filter((l)=>l.status === "delivered").length;
    const revenue = leads.filter((l)=>l.status === "delivered").reduce((sum, l)=>sum + (l.price || 0), 0);
    const conversionRate = totalLeads > 0 ? (delivered / totalLeads * 100).toFixed(1) : 0;
    const target = 10;
    const achieved = delivered;
    const percent = (achieved / target * 100).toFixed(1);
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
        title: "Target Progress",
        value: `${achieved}/${target} (${percent}%)`
    }, void 0, false, {
        fileName: "[project]/components/KPIcards.js",
        lineNumber: 15,
        columnNumber: 3
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: "20px",
            marginTop: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
                title: "Total Leads",
                value: totalLeads
            }, void 0, false, {
                fileName: "[project]/components/KPIcards.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
                title: "Sales",
                value: delivered
            }, void 0, false, {
                fileName: "[project]/components/KPIcards.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
                title: "Revenue",
                value: `₹${revenue}`
            }, void 0, false, {
                fileName: "[project]/components/KPIcards.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
                title: "Conversion %",
                value: `${conversionRate}%`
            }, void 0, false, {
                fileName: "[project]/components/KPIcards.js",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/KPIcards.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function Card({ title, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: "20px",
            background: "#f5f5f5",
            borderRadius: "10px",
            width: "150px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/KPIcards.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                children: value
            }, void 0, false, {
                fileName: "[project]/components/KPIcards.js",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/KPIcards.js",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/BranchFilter.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BranchFilter
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function BranchFilter({ branch, setBranch, data }) {
    const branches = [
        "All",
        ...new Set(data.leads.map((l)=>l.branch))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                children: "Select Branch: "
            }, void 0, false, {
                fileName: "[project]/components/BranchFilter.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                value: branch,
                onChange: (e)=>setBranch(e.target.value),
                children: branches.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        children: b
                    }, i, false, {
                        fileName: "[project]/components/BranchFilter.js",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/BranchFilter.js",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BranchFilter.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/SalesChart.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SalesChart
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [ssr] (ecmascript)");
;
;
function SalesChart({ leads }) {
    const branchMap = {};
    leads.forEach((l)=>{
        if (!branchMap[l.branch]) {
            branchMap[l.branch] = 0;
        }
        if (l.status === "delivered") {
            branchMap[l.branch]++;
        }
    });
    const chartData = Object.keys(branchMap).map((branch)=>({
            branch,
            sales: branchMap[branch]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "40px",
            height: "300px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                children: "Sales by Branch"
            }, void 0, false, {
                fileName: "[project]/components/SalesChart.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: chartData,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "branch"
                        }, void 0, false, {
                            fileName: "[project]/components/SalesChart.js",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                            fileName: "[project]/components/SalesChart.js",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                            fileName: "[project]/components/SalesChart.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "sales"
                        }, void 0, false, {
                            fileName: "[project]/components/SalesChart.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SalesChart.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SalesChart.js",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SalesChart.js",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Insights.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Insights
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Insights({ leads }) {
    // 🔹 Find stale leads (>7 days not updated)
    const staleLeads = leads.filter((l)=>{
        if (!l.status_history || l.status_history.length === 0) return false;
        const lastUpdate = new Date(l.status_history[l.status_history.length - 1].date);
        const days = (new Date() - lastUpdate) / (1000 * 60 * 60 * 24);
        return days > 7 && l.status !== "delivered";
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "40px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                children: "🚨 Actionable Insights"
            }, void 0, false, {
                fileName: "[project]/components/Insights.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            staleLeads.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: "#ffe6e6",
                    padding: "15px",
                    borderRadius: "10px"
                },
                children: [
                    "⚠️ ",
                    staleLeads.length,
                    " leads not contacted in 7+ days"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Insights.js",
                lineNumber: 21,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: "✅ No critical issues"
            }, void 0, false, {
                fileName: "[project]/components/Insights.js",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Insights.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dealership_data$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dealership_data.json.[json].cjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KPIcards$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/KPIcards.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BranchFilter$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BranchFilter.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SalesChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SalesChart.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Insights$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Insights.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
function Home() {
    const [branch, setBranch] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("All");
    // 🔹 Filter Leads
    const filteredLeads = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (branch === "All") return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dealership_data$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].leads;
        return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dealership_data$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].leads.filter((l)=>l.branch === branch);
    }, [
        branch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "🚗 DealerPulse Dashboard"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BranchFilter$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                branch: branch,
                setBranch: setBranch,
                data: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dealership_data$2e$json$2e5b$json$5d2e$cjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KPIcards$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                leads: filteredLeads
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SalesChart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                leads: filteredLeads
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Insights$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                leads: filteredLeads
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gh8dz2._.js.map