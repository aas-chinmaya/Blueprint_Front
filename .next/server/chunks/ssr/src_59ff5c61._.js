module.exports = {

"[project]/src/utils/formatDate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// lib/formatRange.js
__turbopack_context__.s({
    "formatDateTimeIST": (()=>formatDateTimeIST),
    "formatDateTimeUTC": (()=>formatDateTimeUTC),
    "formatDateUTC": (()=>formatDateUTC),
    "formatRange": (()=>formatRange)
});
function formatRange(start, end) {
    const options = {
        month: 'short',
        day: 'numeric'
    };
    const startStr = start.toLocaleDateString(undefined, options);
    const endStr = end.toLocaleDateString(undefined, options);
    return `${startStr} – ${endStr}`;
}
function formatDateUTC(dateString) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-GB', {
        timeZone: 'UTC',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}
function formatDateTimeIST(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}
function formatDateTimeUTC(dateString) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleString('en-GB', {
        timeZone: 'UTC',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}
}}),
"[project]/src/utils/sanitize.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Input validation utility functions
/**
 * Checks if the input contains any potentially dangerous content
 * @param {string} input - The input string to validate
 * @returns {Object} - Contains validation result and warning message
 */ __turbopack_context__.s({
    "sanitizeInput": (()=>sanitizeInput),
    "validateInput": (()=>validateInput)
});
const validateInput = (input)=>{
    if (input == null) return {
        isValid: true,
        warning: null
    };
    input = String(input); // Ensure it's a string
    // URL patterns - more comprehensive
    const urlPatterns = [
        /(https?:\/\/[^\s]+)/i,
        /(www\.[^\s]+)/i,
        /([^\s]+\.(com|net|org|edu|gov|mil|biz|info|io|ai|app|dev|web|online|site|xyz|me)[^\s]*)/i,
        /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,
        /(localhost(:\d+)?)/i // localhost
    ];
    // Script and code patterns
    const scriptPatterns = [
        /(<script[\s\S]*?>)/i,
        /(\/?script>)/i,
        /(javascript:|vbscript:|livescript:)/i,
        /(on\w+\s*=)/i,
        /(data:\s*\w+\/\w+;base64)/i
    ];
    // HTML and special character patterns
    const htmlPatterns = [
        /(<[^>]*>)/g,
        /(&[#\w]+;)/g,
        /(^|\s)(div|span|img|<a>|script|style|link|meta|iframe|form|input|button|textarea)(\s|$)/i,
        /[<>{}\[\]`]/g
    ];
    // Check for URLs
    for (const pattern of urlPatterns){
        if (pattern.test(input)) {
            return {
                isValid: false,
                warning: "URLs or web addresses are not allowed in this field"
            };
        }
    }
    // Check for scripts
    for (const pattern of scriptPatterns){
        if (pattern.test(input)) {
            return {
                isValid: false,
                warning: "Script-like content is not allowed in this field"
            };
        }
    }
    // Check for HTML and special characters
    for (const pattern of htmlPatterns){
        if (pattern.test(input)) {
            return {
                isValid: false,
                warning: "HTML tags, special characters, or code-like content are not allowed in this field"
            };
        }
    }
    // Only allow alphanumeric characters, spaces, and basic punctuation
    const validContentPattern = /^[\w\s.,!?-]*$/;
    if (!validContentPattern.test(input)) {
        return {
            isValid: false,
            warning: "Only letters, numbers, spaces, and basic punctuation are allowed"
        };
    }
    return {
        isValid: true,
        warning: null
    };
};
const sanitizeInput = (input)=>{
    if (input == null) return ''; // Handles undefined and null
    let sanitized = String(input); // Ensure it's a string
    // Remove URLs and web addresses
    sanitized = sanitized.replace(/(https?:\/\/[^\s]+)/gi, '') // http(s) URLs
    .replace(/(www\.[^\s]+)/gi, '') // www URLs
    .replace(/([^\s]+\.(com|net|org|edu|gov|mil|biz|info|io|ai|app|dev|web|online|site|xyz|me)[^\s]*)/gi, '') // TLDs
    .replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g, '') // IP addresses
    .replace(/(localhost(:\d+)?)/gi, ''); // localhost
    // Remove script-related content
    sanitized = sanitized.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '') // Complete script tags
    .replace(/<script[\s\S]*?>/gi, '') // Opening script tags
    .replace(/(<\/?script>)/gi, '') // Simple script tags
    .replace(/(javascript:|vbscript:|livescript:)/gi, '') // Script protocols
    .replace(/(on\w+\s*=)/gi, '') // Event handlers
    .replace(/(data:\s*\w+\/\w+;base64)/gi, ''); // Base64 content
    // Remove HTML tags and entities
    sanitized = sanitized.replace(/<[^>]*>/g, '') // HTML tags
    .replace(/(&[#\w]+;)/g, '') // HTML entities
    .replace(/(^|\s)(div|span|img|<a>|script|style|link|meta|iframe|form|input|button|textarea)(\s|$)/gi, ' '); // Common HTML words
    // Remove special characters
    sanitized = sanitized.replace(/[<>{}\[\]`]/g, '');
    // Only keep alphanumeric characters, spaces, and basic punctuation
    sanitized = sanitized.replace(/[^\w\s.,!?-]/g, '');
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,!?-]/g, '');
    // Trim extra whitespace
    // sanitized = sanitized.trim().replace(/\s+/g, ' ');
    // sanitized = sanitized.trim();
    return sanitized;
};
}}),
"[project]/src/app/(protected)/project/[id]/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$components$2f$ViewProjectById$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/project/components/ViewProjectById.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Page({ params }) {
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params); // Unwrap the params Promise
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$project$2f$components$2f$ViewProjectById$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            projectId: resolvedParams.id
        }, void 0, false, {
            fileName: "[project]/src/app/(protected)/project/[id]/page.js",
            lineNumber: 17,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
}}),

};

//# sourceMappingURL=src_59ff5c61._.js.map