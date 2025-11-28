(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import * as React from "react"
// import { cn } from "@/lib/utils"
// function Card({
//   className,
//   ...props
// }) {
//   return (
//     <div
//       data-slot="card"
//       className={cn(
//         "bg-card text-card-foreground flex flex-col gap-6   py-6 shadow-sm",
//         className
//       )}
//       {...props} />
//   );
// }
// function CardHeader({
//   className,
//   ...props
// }) {
//   return (
//     <div
//       data-slot="card-header"
//       className={cn(
//         "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
//         className
//       )}
//       {...props} />
//   );
// }
// function CardTitle({
//   className,
//   ...props
// }) {
//   return (
//     <div
//       data-slot="card-title"
//       className={cn("leading-none font-semibold", className)}
//       {...props} />
//   );
// }
// function CardDescription({
//   className,
//   ...props
// }) {
//   return (
//     <div
//       data-slot="card-description"
//       className={cn("text-muted-foreground text-sm", className)}
//       {...props} />
//   );
// }
// function CardAction({
//   className,
//   ...props
// }) {
//   return (
//     <div
//       data-slot="card-action"
//       className={cn(
//         "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
//         className
//       )}
//       {...props} />
//   );
// }
// function CardContent({
//   className,
//   ...props
// }) {
//   return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
// }
// function CardFooter({
//   className,
//   ...props
// }) {
//   return (
//     <div
//       data-slot="card-footer"
//       className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
//       {...props} />
//   );
// }
// export {
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardAction,
//   CardDescription,
//   CardContent,
// }
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
'use client';
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-lg border bg-card text-card-foreground shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 109,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = 'Card';
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c2 = CardAction;
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1.5 p-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 134,
        columnNumber: 3
    }, this));
_c4 = CardHeader;
CardHeader.displayName = 'CardHeader';
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-2xl font-semibold leading-none tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 143,
        columnNumber: 3
    }, this));
_c6 = CardTitle;
CardTitle.displayName = 'CardTitle';
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 155,
        columnNumber: 3
    }, this));
_c8 = CardDescription;
CardDescription.displayName = 'CardDescription';
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 164,
        columnNumber: 3
    }, this));
_c10 = CardContent;
CardContent.displayName = 'CardContent';
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 169,
        columnNumber: 3
    }, this));
_c12 = CardFooter;
CardFooter.displayName = 'CardFooter';
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardAction");
__turbopack_context__.k.register(_c3, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c4, "CardHeader");
__turbopack_context__.k.register(_c5, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "CardTitle");
__turbopack_context__.k.register(_c7, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "CardDescription");
__turbopack_context__.k.register(_c9, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c10, "CardContent");
__turbopack_context__.k.register(_c11, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c12, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/textarea.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/tabs.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/meet/components/MeetingDetailsContent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MeetingDetailsContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
function MeetingDetailsContent({ selectedMeeting, formatDate, formatDateTime, hasEndNote, canUpdateStatus, openStatusUpdateModal, setShowReschedule, setIsEditing }) {
    // Our internal team (Organizer + Attendees)
    const ourParty = selectedMeeting.ourParty || [];
    // External contacts
    const contactParty = selectedMeeting.contactParty || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-wrap gap-3 items-center justify-between border-b pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold flex items-center gap-2 text-gray-800",
                        children: "Meeting Information"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-teal-600 hover:bg-teal-700 text-white flex-1 sm:flex-none",
                                onClick: ()=>setIsEditing(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                        className: "w-4 h-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    " Edit"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            canUpdateStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none",
                                        onClick: ()=>openStatusUpdateModal("completed"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            " Complete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-red-600 hover:bg-red-700 text-white flex-1 sm:flex-none",
                                        onClick: ()=>openStatusUpdateModal("canceled"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-4 h-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            " Cancel"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "border-teal-600 text-teal-700 hover:bg-teal-50 flex-1 sm:flex-none",
                                        onClick: ()=>setShowReschedule(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "w-4 h-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            " Reschedule"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "text-sm leading-relaxed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Meeting Id:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 86,
                                                    columnNumber: 32
                                                }, this),
                                                " ",
                                                selectedMeeting.meetingId
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 18
                                                }, this),
                                                " ",
                                                formatDate(selectedMeeting.date)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Time:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(selectedMeeting.startTime), "h:mm a"),
                                                " –",
                                                " ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(selectedMeeting.endTime), "h:mm a")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Duration:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 18
                                                }, this),
                                                " ",
                                                selectedMeeting.duration || 0,
                                                " mins"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: `ml-1 ${selectedMeeting.meetingStatus === "completed" ? "border-green-500 text-green-700" : selectedMeeting.meetingStatus === "canceled" ? "border-red-500 text-red-700" : "border-yellow-500 text-yellow-700"}`,
                                                    children: selectedMeeting.meetingStatus.charAt(0).toUpperCase() + selectedMeeting.meetingStatus.slice(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Mode:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-teal-700 font-medium capitalize",
                                                    children: selectedMeeting.mode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            selectedMeeting.agenda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-800 flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-5 h-5 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            " Title"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3",
                                        children: selectedMeeting.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            selectedMeeting.agenda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-800 flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-5 h-5 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            " Agenda"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3",
                                        children: selectedMeeting.agenda
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            selectedMeeting.mode === "online" && selectedMeeting.meetingLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-800 flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                className: "w-5 h-5 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            " Meeting Link"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: selectedMeeting.meetingLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-sm text-cyan-700 underline break-all",
                                        children: selectedMeeting.meetingLink
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            hasEndNote && selectedMeeting.endNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-800 flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-5 h-5 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            " End Note"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700 whitespace-pre-line border-l-2 border-gray-300 pl-3",
                                        children: selectedMeeting.endNote
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-2",
                                        children: [
                                            "Updated: ",
                                            formatDateTime(selectedMeeting.updatedAt)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-gray-800 flex items-center gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-5 h-5 text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this),
                                            " Attendees"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    ourParty.length > 0 || contactParty.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
                                        children: [
                                            ourParty.map((person)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-lg border shadow-sm hover:shadow-md transition-shadow text-center space-y-1 ${person.role === "Organizer" ? "bg-green-50 border-green-300" : "bg-blue-50 border-blue-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-gray-900 truncate",
                                                            children: person.name || "Unknown User"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-medium ${person.role === "Organizer" ? "text-green-700" : "text-blue-700"}`,
                                                            children: person.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, person.employeeID || person._id, true, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)),
                                            contactParty.map((contact, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-gray-50 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow text-center space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-gray-900 truncate",
                                                            children: contact.fullName || "Unknown Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600",
                                                            children: "Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, contact.contactId || index, true, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 italic",
                                        children: "No attendees listed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:border-l lg:pl-6 space-y-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-md font-semibold text-gray-800 flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    " History"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            selectedMeeting.history?.length > 0 ? selectedMeeting.history.map((event, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-2 border-teal-500 pl-4 py-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-gray-700",
                                            children: event.action === "created" ? "Meeting Created" : event.action.charAt(0).toUpperCase() + event.action.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: formatDateTime(event.updatedAt)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "No history available."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/meet/components/MeetingDetailsContent.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = MeetingDetailsContent;
var _c;
__turbopack_context__.k.register(_c, "MeetingDetailsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/meet/components/ProposalContent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProposalContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sales$2f$slices$2f$quotationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/sales/slices/quotationSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ProposalContent({ meetingId, contactId }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { meetingQuotations, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ProposalContent.useSelector": (state)=>state.quotation
    }["ProposalContent.useSelector"]);
    // === Fetch quotations when meetingId changes ===
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProposalContent.useEffect": ()=>{
            if (meetingId) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sales$2f$slices$2f$quotationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchQuotationsByMeeting"])(meetingId));
            }
        }
    }["ProposalContent.useEffect"], [
        meetingId,
        dispatch
    ]);
    // === Cleanup on unmount ===
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProposalContent.useEffect": ()=>{
            return ({
                "ProposalContent.useEffect": ()=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sales$2f$slices$2f$quotationSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearMeetingQuotations"])());
                }
            })["ProposalContent.useEffect"];
        }
    }["ProposalContent.useEffect"], [
        dispatch
    ]);
    // === Handlers ===
    const handleCreate = ()=>{
        router.push(`/sales/quotation/create/${contactId}`);
    };
    const handleEdit = (quotationNumber)=>{
        // Navigate to edit page
        router.push(`/sales/quotation/edit/${meetingQuotations.quotationNumber}`);
    };
    const handleView = (quotationNumber)=>{
        // Open in a new tab
        const url = `/quotation/view/${quotationNumber}?contactId=${contactId}`;
        window.open(url, "_blank");
    };
    // === Loading State ===
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[300px] bg-background rounded-xl shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-10 w-10 text-teal-600 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-gray-600",
                    children: "Loading quotations..."
                }, void 0, false, {
                    fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    // === Render ===
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-background min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-teal-600 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-6 w-6 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            "Quotations"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-teal-600 hover:bg-teal-700 text-white",
                        onClick: handleCreate,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            "Create Quotation"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            !meetingQuotations || meetingQuotations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 text-gray-500 border border-dashed border-gray-300 rounded-lg bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "h-12 w-12 mx-auto mb-3 text-gray-300"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No quotations found for this meeting."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, this) : /* Quotations Grid */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: meetingQuotations.map((q)=>{
                    const isDraft = q.status?.toLowerCase() === "draft";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-lg text-teal-700",
                                                children: q.quotationNumber
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: q.clientName
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-1 text-xs font-medium rounded-full ${isDraft ? "bg-yellow-100 text-yellow-800" : q.status === "draft" ? "bg-green-100 text-green-800" : q.status === "final" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}`,
                                        children: q.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 space-y-1 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Date: ",
                                            new Date(q.date).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Amount: ₹",
                                            q.totalAmount?.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                lineNumber: 117,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: isDraft ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "border-teal-600 text-teal-600 hover:bg-teal-50",
                                    onClick: ()=>handleEdit(q.quotationNumber),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "h-4 w-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                            lineNumber: 130,
                                            columnNumber: 23
                                        }, this),
                                        "Edit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                    lineNumber: 124,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    className: "border-teal-600 text-teal-600 hover:bg-teal-50",
                                    onClick: ()=>handleView(q.quotationNumber),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                            lineNumber: 140,
                                            columnNumber: 23
                                        }, this),
                                        "View"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                    lineNumber: 134,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this)
                        ]
                    }, q.quotationNumber, true, {
                        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                        lineNumber: 91,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/meet/components/ProposalContent.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(ProposalContent, "zjj6CyZ5hJAiQDQ/Q7WDoCRTNXA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ProposalContent;
var _c;
__turbopack_context__.k.register(_c, "ProposalContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/meet/components/MomContent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState, useRef, useCallback } from "react";
// import { format, isAfter, addHours } from "date-fns";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMoMByMeetingId,
//   resetMoMByMeetingId,
//   createMoM,
//   updateMoM,
//   fetchMoMView,
// } from "@/modules/meet/slices/momSlice";
// import { submitCause } from "@/modules/escalation/slices/causeSlice";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Loader2,
//   Edit2,
//   AlertCircle,
//   FileText,
//   Users,
//   Clock,
//   Signature,
//   User,
// } from "lucide-react";
// import { toast } from "sonner";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import Image from "next/image";
// export default function MomContent({ meeting, meetingId }) {
//   const dispatch = useDispatch();
//   const { momByMeetingId, momByMeetingIdLoading, momView, momViewLoading } = useSelector(
//     (state) => state.mom
//   );
//   const [mode, setMode] = useState("view"); // "view", "form", "form-readonly"
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [isTimeExceeded, setIsTimeExceeded] = useState(false);
//   const [isWithinOneHour, setIsWithinOneHour] = useState(false);
//   const [reasonForDelay, setReasonForDelay] = useState("");
//   const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
//   const [signatureFile, setSignatureFile] = useState(null);
//   const [signaturePreview, setSignaturePreview] = useState(null);
//   const containerRef = useRef(null);
//   const { currentUser } = useCurrentUser();
//   // Form state for creating/editing MOM
//   const [momForm, setMomForm] = useState({
//     agenda: meeting?.agenda || "",
//     meetingMode: meeting?.mode || "Offline",
//     duration: "",
//     participants: "",
//     summary: "",
//     notes: "",
//     createdBy: currentUser?.name || "",
//     meetingId: meetingId || "",
//     status: "draft",
//   });
//   // Helper: Format time (e.g., "10:00 AM")
//   const formatTimes = (dateTime) => {
//     if (!dateTime) return "";
//     try {
//       return format(new Date(dateTime), "p");
//     } catch {
//       return "";
//     }
//   };
//   // Helper: Compute duration as "startTime - endTime"
//   const getDurationString = useCallback(() => {
//     const start = meeting?.startTime ? new Date(meeting.startTime) : null;
//     const end = meeting?.endTime ? new Date(meeting.endTime) : null;
//     if (!start || !end || isNaN(start) || isNaN(end)) return "N/A";
//     if (start >= end) return "Invalid duration (end time before start)";
//     return `${formatTimes(start)} - ${formatTimes(end)}`;
//   }, [meeting]);
//   // Helper: Parse attendees from ourParty and contactParty
//   const getAttendeesArray = useCallback(() => {
//     const ourPartyAttendees = (meeting?.ourParty || []).map(
//       (p) => p.name || p.email || "Unknown"
//     );
//     const contactPartyAttendees = (meeting?.contactParty || []).map(
//       (p) => p.fullName !== "undefined undefined" ? p.fullName : p.email || "Unknown"
//     );
//     return [...ourPartyAttendees, ...contactPartyAttendees].filter(Boolean);
//   }, [meeting]);
//   // Helper: Check meeting time status
//   const checkMeetingTimeStatus = useCallback(() => {
//     if (!meeting?.endTime) return { isTimeExceeded: false, isWithinOneHour: false };
//     const endTime = new Date(meeting.endTime);
//     const now = new Date();
//     const oneHourAfterEnd = addHours(endTime, 1);
//     return {
//       isTimeExceeded: isAfter(now, endTime),
//       isWithinOneHour: isAfter(now, endTime) && !isAfter(now, oneHourAfterEnd),
//     };
//   }, [meeting]);
//   // Effect: Initialize form and check time status
//   useEffect(() => {
//     const { isTimeExceeded, isWithinOneHour } = checkMeetingTimeStatus();
//     setIsTimeExceeded(isTimeExceeded);
//     setIsWithinOneHour(isWithinOneHour);
//     const participants = momByMeetingId?.participants
//       ? momByMeetingId.participants.join(", ")
//       : getAttendeesArray().join(", ");
//     if (momByMeetingId && momByMeetingId.meetingId === meetingId) {
//       setMomForm({
//         agenda: momByMeetingId.agenda || meeting?.agenda || "",
//         meetingMode: momByMeetingId.meetingMode || meeting?.mode || "Offline",
//         duration: momByMeetingId.duration || getDurationString() || "",
//         participants: participants,
//         summary: momByMeetingId.summary || "",
//         notes: momByMeetingId.notes || "",
//         createdBy: momByMeetingId.createdBy || currentUser?.name || "",
//         meetingId: meetingId || "",
//         status: momByMeetingId.status || "draft",
//       });
//       setMode(momByMeetingId.status === "final" ? "view" : "form-readonly");
//       setIsEditMode(false);
//     } else {
//       setMomForm({
//         agenda: meeting?.agenda || "",
//         meetingMode: meeting?.mode || "Offline",
//         duration: getDurationString() || "",
//         participants: getAttendeesArray().join(", "),
//         summary: "",
//         notes: "",
//         createdBy: currentUser?.name || "",
//         meetingId: meetingId || "",
//         status: "draft",
//       });
//       setMode("form");
//       setIsEditMode(false);
//     }
//     setReasonForDelay(momByMeetingId?.reasonForDelay || "");
//     setIsAgreedToTerms(false);
//     setSignatureFile(null);
//     setSignaturePreview(null);
//   }, [momByMeetingId, meetingId, checkMeetingTimeStatus, currentUser?.name, meeting, getAttendeesArray, getDurationString]);
//   // Effect: Fetch MOM data
//   useEffect(() => {
//     if (meetingId) {
//       dispatch(fetchMoMByMeetingId(meetingId));
//     }
//   }, [meetingId, dispatch]);
//   // Effect: Fetch MOM view when available
//   useEffect(() => {
//     if (momByMeetingId?.momId && mode === "view") {
//       dispatch(fetchMoMView(momByMeetingId.momId));
//       console.log(momByMeetingId);
//     }
//   }, [momByMeetingId?.momId, mode, dispatch]);
//   // Effect: Clean up blob URL and reset state
//   useEffect(() => {
//     return () => {
//       if (momView?.pdfUrl) {
//         URL.revokeObjectURL(momView.pdfUrl);
//       }
//       if (signaturePreview) {
//         URL.revokeObjectURL(signaturePreview);
//       }
//       dispatch(resetMoMByMeetingId());
//     };
//   }, [momView?.pdfUrl, signaturePreview, dispatch]);
//   // Handler: Form input changes
//   const handleMomFormChange = (e, field) => {
//     setMomForm({ ...momForm, [field]: e.target.value });
//   };
//   // Handler: Reason for delay change
//   const handleReasonForDelayChange = (e) => {
//     setReasonForDelay(e.target.value);
//   };
//   // Handler: Signature file change
//   const handleSignatureFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
//       setSignatureFile(file);
//       setSignaturePreview(URL.createObjectURL(file));
//     } else {
//       toast.error("Please upload a valid image file (.png, .jpg, .jpeg).");
//       setSignatureFile(null);
//       setSignaturePreview(null);
//     }
//   };
//   // Handler: Terms agreement checkbox
//   const handleTermsChange = (checked) => {
//     setIsAgreedToTerms(checked);
//   };
//   // Helper: Check if all required fields are filled
//   const areRequiredFieldsFilled = (status = "draft") => {
//     const baseFields = momForm.createdBy.trim() && momForm.summary.trim();
//     if (status === "final") {
//       return baseFields && signatureFile && (!isTimeExceeded || (reasonForDelay.trim() && isAgreedToTerms));
//     }
//     return baseFields;
//   };
// console.log(momByMeetingId);
//   // Handler: Form submission
//   const handleSubmit = async (status) => {
//     if (!momForm.createdBy.trim()) {
//       toast.info("Please enter the name of the person who created the MOM.");
//       return;
//     }
//     if (!momForm.summary.trim()) {
//       toast.info("Please enter a summary.");
//       return;
//     }
//     if (status === "final" && !signatureFile) {
//       toast.info("Please upload a signature image.");
//       return;
//     }
//     if (status === "final" && isTimeExceeded && !isEditMode && (!reasonForDelay.trim() || !isAgreedToTerms)) {
//       toast.info("Please provide a reason for the delay and agree to the terms.");
//       return;
//     }
//     try {
//       const formData = new FormData();
//       formData.append("agenda", momForm.agenda || "");
//       formData.append("meetingMode", momForm.meetingMode || "Offline");
//       formData.append("duration", momForm.duration || "");
//       formData.append("participants", JSON.stringify(momForm.participants.split(",").map(p => p.trim()).filter(Boolean)));
//       formData.append("summary", momForm.summary);
//       formData.append("notes", momForm.notes);
//       formData.append("createdBy", momForm.createdBy);
//       formData.append("meetingId", momForm.meetingId);
//       formData.append("status", status);
//       if (signatureFile) {
//         formData.append("signature", signatureFile);
//       }
//       if (status === "final" && isTimeExceeded && !isEditMode) {
//         formData.append("reasonForDelay", reasonForDelay);
//       }
//       if (status === "final" && isTimeExceeded && !isEditMode) {
//         await dispatch(
//           submitCause({
//             meetingId: meetingId,
//             reason: reasonForDelay,
//             submittedBy: currentUser?.name || momForm.createdBy,
//           })
//         ).unwrap();
//         toast.success("Cause for delay submitted successfully!");
//       }
//       if (isEditMode && momByMeetingId) {
//         await dispatch(updateMoM(formData)).unwrap();
//         toast.success(`MOM ${status === "draft" ? "updated as draft" : "finalized"} successfully!`);
//       } else {
//         await dispatch(createMoM(formData)).unwrap();
//         toast.success(`MOM ${status === "draft" ? "saved as draft" : "created"} successfully!`);
//       }
//       setMode("view");
//       setIsEditMode(false);
//       setReasonForDelay("");
//       setIsAgreedToTerms(false);
//       setSignatureFile(null);
//       setSignaturePreview(null);
//     } catch (error) {
//       toast.error(`Failed to ${isEditMode ? "update" : "create"} MOM: ${error?.message || "Unknown error"}`);
//     }
//   };
//   // Handler: Toggle to edit mode
//   const handleToggleMode = () => {
//     if (mode === "view") {
//       setMode("form");
//       setIsEditMode(momByMeetingId ? true : false);
//     } else {
//       setMode("view");
//       setIsEditMode(false);
//       setReasonForDelay("");
//       setIsAgreedToTerms(false);
//       setSignatureFile(null);
//       setSignaturePreview(null);
//     }
//   };
//   // Loading state
//   if (momByMeetingIdLoading || momViewLoading) {
//     return (
//       <div className="min-h-[400px] bg-background rounded-xl flex items-center justify-center shadow-md">
//         <div className="flex flex-col items-center gap-4">
//           <Loader2 className="h-12 w-12 text-teal-600 animate-spin" />
//           <span className="text-teal-600 text-lg font-semibold">Loading...</span>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="w-full p-4 sm:p-6 bg-background rounded-xl shadow-md">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h2 className="text-xl sm:text-2xl font-bold text-teal-600 flex items-center">
//           <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
//           {mode === "form" || mode === "form-readonly"
//             ? isEditMode
//               ? "Edit Minutes of Meeting"
//               : "Create Minutes of Meeting"
//             : "Meeting Details"}
//         </h2>
//         {mode === "view" && momByMeetingId && (
//           <Button
//             variant="ghost"
//             onClick={handleToggleMode}
//             className="text-teal-600 hover:bg-teal-50"
//             title="Edit MOM"
//           >
//             <Edit2 className="h-5 w-5" />
//           </Button>
//         )}
//       </div>
//       {/* Warning Messages */}
//       {isTimeExceeded && (!momByMeetingId || !isWithinOneHour) && (
//         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center text-sm">
//           <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
//           <span>
//             {!momByMeetingId
//               ? isWithinOneHour
//                 ? "Please complete MOM within one hour of meeting end time."
//                 : "Meeting has ended, and no MOM has been created."
//               : "Meeting has ended, and MOM creation is delayed beyond one hour."}
//           </span>
//         </div>
//       )}
//       {/* Form or MOM Preview */}
//       <div className="space-y-4">
//         {mode === "form" || mode === "form-readonly" ? (
//           // Form View
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-gray-800">
//               {isEditMode ? "Edit MOM" : mode === "form-readonly" ? "View MOM (Draft)" : "Create MOM"}
//             </h3>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <FileText className="h-5 w-5 mr-2" />
//                 Agenda
//               </Label>
//               <Textarea
//                 value={momForm.agenda}
//                 onChange={(e) => handleMomFormChange(e, "agenda")}
//                 placeholder="Enter meeting agenda..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Users className="h-5 w-5 mr-2" />
//                 Meeting Mode
//               </Label>
//               <Input
//                 value={momForm.meetingMode}
//                 onChange={(e) => handleMomFormChange(e, "meetingMode")}
//                 placeholder="Enter meeting mode (e.g., Offline, Online)..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Clock className="h-5 w-5 mr-2" />
//                 Duration
//               </Label>
//               <Input
//                 value={momForm.duration}
//                 onChange={(e) => handleMomFormChange(e, "duration")}
//                 placeholder="Enter duration (e.g., 10:00 AM - 11:00 AM)..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Users className="h-5 w-5 mr-2" />
//                 Participants
//               </Label>
//               <Textarea
//                 value={momForm.participants}
//                 onChange={(e) => handleMomFormChange(e, "participants")}
//                 placeholder="Enter participants (comma-separated)..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <FileText className="h-5 w-5 mr-2" />
//                 Summary
//               </Label>
//               <Textarea
//                 value={momForm.summary}
//                 onChange={(e) => handleMomFormChange(e, "summary")}
//                 placeholder="Enter meeting summary..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <FileText className="h-5 w-5 mr-2" />
//                 Notes
//               </Label>
//               <Textarea
//                 value={momForm.notes}
//                 onChange={(e) => handleMomFormChange(e, "notes")}
//                 placeholder="Enter additional notes..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 rows={4}
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             {isTimeExceeded && !isEditMode && mode !== "form-readonly" && (
//               <>
//                 <div>
//                   <Label className="text-teal-600 font-semibold flex items-center">
//                     <AlertCircle className="h-5 w-5 mr-2 text-red-700" />
//                     Reason for Delay
//                   </Label>
//                   <Textarea
//                     value={reasonForDelay}
//                     onChange={handleReasonForDelayChange}
//                     placeholder="Enter reason for delay..."
//                     className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                     rows={3}
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="terms"
//                     checked={isAgreedToTerms}
//                     onCheckedChange={handleTermsChange}
//                     className="border-gray-300 data-[state=checked]:bg-teal-600"
//                     disabled={mode === "form-readonly" && !isEditMode}
//                   />
//                   <Label htmlFor="terms" className="text-teal-600 font-semibold text-sm sm:text-base">
//                     I agree to the cause terms and conditions
//                   </Label>
//                 </div>
//               </>
//             )}
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <Signature className="h-5 w-5 mr-2" />
//                 Signature (Image)
//               </Label>
//               <Input
//                 type="file"
//                 accept="image/png,image/jpeg,image/jpg"
//                 onChange={handleSignatureFileChange}
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base"
//                 disabled={mode === "form-readonly" && !isEditMode}
//               />
//               {signaturePreview && (
//                 <div className="mt-2">
//                   <Image
//                     src={signaturePreview}
//                     alt="Signature Preview"
//                     width={120}
//                     height={80}
//                     className="rounded-md border border-gray-300"
//                   />
//                 </div>
//               )}
//             </div>
//             <div>
//               <Label className="text-teal-600 font-semibold flex items-center">
//                 <User className="h-5 w-5 mr-2" />
//                 Created By
//               </Label>
//               <Input
//                 value={momForm.createdBy}
//                 onChange={(e) => handleMomFormChange(e, "createdBy")}
//                 placeholder="Recorder's name..."
//                 className="mt-1 border-gray-300 focus:ring-1 focus:ring-teal-500 bg-white rounded-lg text-sm sm:text-base w-full"
//                 readOnly={mode === "form-readonly" && !isEditMode}
//               />
//             </div>
//             <div className="flex justify-end gap-3">
//               {(isEditMode || mode === "form-readonly") && (
//                 <Button
//                   variant="outline"
//                   className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text.voice-mode sm:text-base"
//                   onClick={() => setMode("view")}
//                 >
//                   Cancel
//                 </Button>
//               )}
//               {mode !== "form-readonly" || isEditMode ? (
//                 <>
//                   <Button
//                     variant="outline"
//                     className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-lg text-sm sm:text-base"
//                     onClick={() => handleSubmit("draft")}
//                     disabled={momByMeetingIdLoading || !areRequiredFieldsFilled("draft")}
//                   >
//                     {momByMeetingIdLoading ? (
//                       <>
//                         <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                         Saving...
//                       </>
//                     ) : (
//                       "Save as Draft"
//                     )}
//                   </Button>
//                   <Button
//                     className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm sm:text-base"
//                     onClick={() => handleSubmit("final")}
//                     disabled={momByMeetingIdLoading || !areRequiredFieldsFilled("final")}
//                   >
//                     {momByMeetingIdLoading ? (
//                       <>
//                         <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                         Submitting...
//                       </>
//                     ) : isEditMode ? (
//                       "Finalize MOM"
//                     ) : (
//                       "Create MOM"
//                     )}
//                   </Button>
//                 </>
//               ) : (
//                 <Button
//                   className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm sm:text-base"
//                   onClick={handleToggleMode}
//                 >
//                   <Edit2 className="h-4 w-4 mr-1" />
//                   Edit MOM
//                 </Button>
//               )}
//             </div>
//           </div>
//         ) : (
//           // View Mode: MOM Preview
//           <div className="space-y-4">
//             {momByMeetingId && momView?.pdfUrl && (
//               <div>
//                 <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg border border-gray-300 overflow-hidden">
//                   <iframe
//                     src={momView.pdfUrl}
//                     width="100%"
//                     height="100%"
//                     className="rounded-lg"
//                     title="MOM PDF Preview"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>MomContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/slices/momSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function MomContent({ meeting, meetingId }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { momByMeetingId, momByMeetingIdLoading, momView, momViewLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "MomContent.useSelector": (state)=>state.mom
    }["MomContent.useSelector"]);
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"])();
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [signatureFile, setSignatureFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signaturePreview, setSignaturePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Read-only fields
    const agenda = momByMeetingId?.agenda || meeting?.agenda || "N/A";
    const meetingMode = momByMeetingId?.meetingMode || meeting?.mode || "Offline";
    const createdBy = momByMeetingId?.createdBy || currentUser?.name || "Unknown";
    const formatTime = (date)=>date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(date), "p") : "N/A";
    const duration = meeting?.startTime && meeting?.endTime ? `${formatTime(meeting.startTime)} - ${formatTime(meeting.endTime)}` : "N/A";
    const participants = (()=>{
        const our = (meeting?.ourParty || []).map((p)=>p.name || p.email || "").filter(Boolean);
        const contact = (meeting?.contactParty || []).map((p)=>p.fullName && p.fullName !== "undefined undefined" ? p.fullName : p.email || "").filter(Boolean);
        return [
            ...our,
            ...contact
        ].join(", ") || "None listed";
    })();
    // Load MOM data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MomContent.useEffect": ()=>{
            if (meetingId) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMoMByMeetingId"])(meetingId));
        }
    }["MomContent.useEffect"], [
        meetingId,
        dispatch
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MomContent.useEffect": ()=>{
            if (momByMeetingId) {
                setSummary(momByMeetingId.summary || "");
                setNotes(momByMeetingId.notes || "");
            } else {
                setSummary("");
                setNotes("");
            }
            setSignatureFile(null);
            setSignaturePreview(null);
        }
    }["MomContent.useEffect"], [
        momByMeetingId
    ]);
    // Fetch PDF for final MOM
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MomContent.useEffect": ()=>{
            if (momByMeetingId?.status === "final" && momByMeetingId.momId) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMoMView"])(momByMeetingId.momId));
            }
        }
    }["MomContent.useEffect"], [
        momByMeetingId?.momId,
        momByMeetingId?.status,
        dispatch
    ]);
    // Cleanup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MomContent.useEffect": ()=>{
            return ({
                "MomContent.useEffect": ()=>{
                    if (momView?.pdfUrl) URL.revokeObjectURL(momView.pdfUrl);
                    if (signaturePreview) URL.revokeObjectURL(signaturePreview);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetMoMByMeetingId"])());
                }
            })["MomContent.useEffect"];
        }
    }["MomContent.useEffect"], []);
    console.log(momByMeetingId);
    const handleSignatureChange = (e)=>{
        const file = e.target.files[0];
        if (file && /^image\/(png|jpeg|jpg)$/.test(file.type)) {
            setSignatureFile(file);
            setSignaturePreview(URL.createObjectURL(file));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Upload PNG/JPG only");
            e.target.value = "";
        }
    };
    const openPdfInNewTab = ()=>{
        if (momView?.pdfUrl) window.open(momView.pdfUrl, "_blank", "noopener,noreferrer");
    };
    const handleSubmit = async (status)=>{
        if (!summary.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Summary is required");
            return;
        }
        if (status === "final" && !signatureFile && !momByMeetingId?.signatureUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Signature is required");
            return;
        }
        const formData = new FormData();
        formData.append("agenda", agenda);
        formData.append("meetingMode", meetingMode);
        formData.append("duration", duration);
        formData.append("participants", JSON.stringify(participants.split(",").map((p)=>p.trim())));
        formData.append("summary", summary);
        formData.append("notes", notes);
        formData.append("createdBy", createdBy);
        formData.append("meetingId", meetingId);
        formData.append("status", status);
        if (signatureFile) formData.append("signature", signatureFile);
        try {
            if (momByMeetingId) {
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMoM"])(formData)).unwrap();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("MOM updated");
            } else {
                await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMoM"])(formData)).unwrap();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("MOM created");
            }
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$momSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMoMByMeetingId"])(meetingId));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to save MOM");
        }
    };
    // Loading
    if (momByMeetingIdLoading || momViewLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[400px] flex items-center justify-center bg-gray-100 rounded-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin text-teal-500 mx-auto mb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                        lineNumber: 756,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-teal-600",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                        lineNumber: 757,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                lineNumber: 755,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/meet/components/MomContent.jsx",
            lineNumber: 754,
            columnNumber: 7
        }, this);
    }
    const isFinal = momByMeetingId?.status === "final";
    const hasMom = !!momByMeetingId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-4 bg-white rounded-2xl shadow-md border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg md:text-xl font-bold text-teal-600 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 771,
                                columnNumber: 11
                            }, this),
                            "Minutes of Meeting"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                        lineNumber: 770,
                        columnNumber: 9
                    }, this),
                    isFinal && momView?.pdfUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: openPdfInNewTab,
                        variant: "ghost",
                        size: "sm",
                        className: "text-teal-500 hover:bg-teal-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "h-4 w-4 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 776,
                                columnNumber: 13
                            }, this),
                            "View PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                        lineNumber: 775,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                lineNumber: 769,
                columnNumber: 7
            }, this),
            isFinal && momView?.pdfUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-gray-200 rounded-xl overflow-hidden bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: momView.pdfUrl,
                    className: "w-full h-[600px]",
                    title: "Final MOM"
                }, void 0, false, {
                    fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                    lineNumber: 785,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                lineNumber: 784,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-700 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-xs",
                                        children: "Agenda"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 792,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 p-3 bg-gray-50 rounded-lg",
                                        children: agenda
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 793,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 791,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-xs",
                                        children: "Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 796,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 p-3 bg-gray-50 rounded-lg",
                                        children: meetingMode
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 797,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 795,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-xs flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                                lineNumber: 801,
                                                columnNumber: 17
                                            }, this),
                                            " Duration"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 800,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 p-3 bg-gray-50 rounded-lg",
                                        children: duration
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 799,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-xs flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this),
                                            " Created By"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 p-3 bg-gray-50 rounded-lg",
                                        children: createdBy
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 809,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 805,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-xs flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                                lineNumber: 813,
                                                columnNumber: 17
                                            }, this),
                                            " Participants"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 p-3 bg-gray-50 rounded-lg",
                                        children: participants
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 815,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 811,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                        lineNumber: 790,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-sm",
                                        children: [
                                            "Summary ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                                lineNumber: 823,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        value: summary,
                                        onChange: (e)=>setSummary(e.target.value),
                                        placeholder: "Meeting summary...",
                                        rows: 4,
                                        className: "mt-1 text-sm resize-none bg-gray-50 focus:ring-teal-400",
                                        disabled: isFinal
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-sm",
                                        children: "Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 835,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                        value: notes,
                                        onChange: (e)=>setNotes(e.target.value),
                                        placeholder: "Action items or remarks...",
                                        rows: 3,
                                        className: "mt-1 text-sm bg-gray-50 focus:ring-teal-400",
                                        disabled: isFinal
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 836,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 834,
                                columnNumber: 13
                            }, this),
                            !isFinal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        className: "text-teal-500 font-medium text-sm",
                                        children: [
                                            "Signature ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                                lineNumber: 848,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 847,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/png,image/jpeg,image/jpg",
                                        onChange: handleSignatureChange,
                                        className: "mt-1 block w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-teal-50 file:text-teal-600 hover:file:bg-teal-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 850,
                                        columnNumber: 17
                                    }, this),
                                    signaturePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: signaturePreview,
                                            alt: "Signature",
                                            width: 150,
                                            height: 60,
                                            className: "border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                            lineNumber: 858,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 857,
                                        columnNumber: 19
                                    }, this),
                                    momByMeetingId?.signatureUrl && !signatureFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: momByMeetingId.signatureUrl,
                                            alt: "Current signature",
                                            width: 150,
                                            height: 60,
                                            className: "border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                            lineNumber: 863,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                        lineNumber: 862,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 846,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                        lineNumber: 820,
                        columnNumber: 11
                    }, this),
                    !isFinal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-3 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>handleSubmit("draft"),
                                disabled: !summary.trim(),
                                className: "text-teal-600 border-teal-200 hover:bg-teal-50",
                                children: "Save Draft"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 873,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: ()=>handleSubmit("final"),
                                disabled: !summary.trim() || !signatureFile && !momByMeetingId?.signatureUrl,
                                className: "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white",
                                children: hasMom ? "Finalize" : "Create"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                                lineNumber: 882,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
                        lineNumber: 872,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/meet/components/MomContent.jsx",
        lineNumber: 767,
        columnNumber: 5
    }, this);
}
_s(MomContent, "mccWW0LZoziz9feAcaGwFfqoLKg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"]
    ];
});
_c = MomContent;
var _c;
__turbopack_context__.k.register(_c, "MomContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/meet/components/MeetingController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { ChevronLeft,Badge, Save, X } from "lucide-react";
// import { format } from "date-fns"; // PROPERLY IMPORTED
// import {
//   fetchMeetingById,
//   updateMeeting,
//   clearSelectedMeeting,
//   clearError,
// } from "@/modules/meet/slices/meetSlice";
// import MeetingDetailsContent from "./MeetingDetailsContent";
// import ProposalContent from "./ProposalContent";
// import MomContent from "./MomContent";
// export default function MeetingController({ meetingId }) {
//   const dispatch = useDispatch();
//   const { selectedMeeting, status, error } = useSelector((state) => state.meet);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState(null);
//   const [showReschedule, setShowReschedule] = useState(false);
//   const [showStatusUpdate, setShowStatusUpdate] = useState(false);
//   const [statusUpdateType, setStatusUpdateType] = useState(null);
//   const [endNote, setEndNote] = useState("");
//   const [localError, setLocalError] = useState(null);
//   const [updateStatus, setUpdateStatus] = useState("idle");
//   // MEETING IS FINAL → NO EDITS ALLOWED
//   const isFinalStatus = ["completed", "canceled"].includes(selectedMeeting?.meetingStatus);
//   const canUpdateStatus = ["scheduled", "rescheduled"].includes(selectedMeeting?.meetingStatus);
//   useEffect(() => {
//     if (meetingId) {
//       dispatch(fetchMeetingById(meetingId));
//     }
//     return () => {
//       dispatch(clearSelectedMeeting());
//       dispatch(clearError());
//     };
//   }, [dispatch, meetingId]);
//   useEffect(() => {
//     if (selectedMeeting) {
//       try {
//         setEditForm({
//           title: selectedMeeting.title || "",
//           date: selectedMeeting.date ? format(new Date(selectedMeeting.date), "yyyy-MM-dd") : "",
//           startTime: selectedMeeting.startTime
//             ? format(new Date(selectedMeeting.startTime), "HH:mm")
//             : "",
//           endTime: selectedMeeting.endTime
//             ? format(new Date(selectedMeeting.endTime), "HH:mm")
//             : "",
//           agenda: selectedMeeting.agenda || "",
//           mode: selectedMeeting.mode || "online",
//           meetingLink: selectedMeeting.meetingLink || "",
//           meetingStatus: selectedMeeting.meetingStatus || "scheduled",
//         });
//         setLocalError(null);
//       } catch (err) {
//         console.error("Sync error:", err);
//         setLocalError("Invalid meeting data.");
//       }
//     }
//   }, [selectedMeeting]);
//   // PROPER TIME FORMATTERS
//   const formatDate = (dateStr) => {
//     if (!dateStr) return "N/A";
//     try {
//       return format(new Date(dateStr), "MMM d, yyyy");
//     } catch {
//       return "Invalid Date";
//     }
//   };
//   const formatTime = (dateStr) => {
//     if (!dateStr) return "N/A";
//     try {
//       return format(new Date(dateStr), "h:mm a"); // 2:30 PM
//     } catch {
//       return "Invalid Time";
//     }
//   };
//   const formatDateTime = (dateStr) => {
//     if (!dateStr) return "N/A";
//     try {
//       return format(new Date(dateStr), "MMM d, yyyy h:mm a");
//     } catch {
//       return "Invalid DateTime";
//     }
//   };
//   const handleSave = async () => {
//     if (isFinalStatus) {
//       setLocalError("Cannot edit a completed or canceled meeting.");
//       return;
//     }
//     if (!editForm?.title || !editForm.date || !editForm.startTime || !editForm.endTime) {
//       setLocalError("Please fill all required fields.");
//       return;
//     }
//     if (editForm.mode === "online" && !editForm.meetingLink) {
//       setLocalError("Please provide a meeting link for online mode.");
//       return;
//     }
//     try {
//       setLocalError(null);
//       setUpdateStatus("loading");
//       await dispatch(
//         updateMeeting({
//           meetingId,
//           updates: {
//             title: editForm.title,
//             agenda: editForm.agenda,
//             mode: editForm.mode,
//             meetingLink: editForm.mode === "online" ? editForm.meetingLink : null,
//             meetingStatus: editForm.meetingStatus,
//             startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
//             endTime: `${editForm.date}T${editForm.endTime}:00.000Z`,
//           },
//         })
//       ).unwrap();
//       setIsEditing(false);
//     } catch (err) {
//       setLocalError(err?.message || "Failed to update.");
//     } finally {
//       setUpdateStatus("idle");
//     }
//   };
//   const handleReschedule = async () => {
//     if (isFinalStatus) {
//       setLocalError("Cannot reschedule a completed or canceled meeting.");
//       return;
//     }
//     if (!editForm?.date || !editForm.startTime || !editForm.endTime) {
//       setLocalError("Please fill all required fields.");
//       return;
//     }
//     try {
//       setLocalError(null);
//       setUpdateStatus("loading");
//       await dispatch(
//         updateMeeting({
//           meetingId,
//           updates: {
//             startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
//             endTime: `${editForm.date}T${editForm.endTime}:00.000Z`,
//             meetingStatus: "rescheduled",
//           },
//         })
//       ).unwrap();
//       setShowReschedule(false);
//     } catch (err) {
//       setLocalError(err?.message || "Failed to reschedule.");
//     } finally {
//       setUpdateStatus("idle");
//     }
//   };
//   const handleStatusUpdate = async () => {
//     if (!endNote.trim()) {
//       setLocalError("Please provide a feedback note.");
//       return;
//     }
//     try {
//       setLocalError(null);
//       setUpdateStatus("loading");
//       await dispatch(
//         updateMeeting({
//           meetingId,
//           updates: {
//             meetingStatus: statusUpdateType,
//             endNote: endNote.trim(),
//           },
//         })
//       ).unwrap();
//       setShowStatusUpdate(false);
//       setEndNote("");
//       setStatusUpdateType(null);
//     } catch (err) {
//       setLocalError(err?.message || "Failed to update status.");
//     } finally {
//       setUpdateStatus("idle");
//     }
//   };
//   const openStatusUpdateModal = (type) => {
//     setStatusUpdateType(type);
//     setShowStatusUpdate(true);
//   };
//   // LOADING
//   if (status === "loading") {
//     return (
//       <div className="min-h-screen bg-gray-50 py-8 px-4">
//         <div className="max-w-6xl mx-auto space-y-4">
//           <Skeleton className="h-8 w-32" />
//           <Card className="shadow-lg border-0 p-6 space-y-4">
//             <Skeleton className="h-10 w-3/4" />
//             <div className="grid lg:grid-cols-5 gap-6">
//               <div className="lg:col-span-4 space-y-3">
//                 <Skeleton className="h-6 w-40" />
//                 <Skeleton className="h-4 w-full" />
//                 <Skeleton className="h-4 w-full" />
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     );
//   }
//   // ERROR
//   if (status === "failed" || localError) {
//     return (
//       <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
//         <AlertDescription>{localError || error || "No meeting found."}</AlertDescription>
//       </Alert>
//     );
//   }
//   if (!selectedMeeting) {
//     return (
//       <Alert variant="destructive" className="max-w-2xl mx-auto mt-8">
//         <AlertDescription>Meeting data unavailable.</AlertDescription>
//       </Alert>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className=" mx-auto">
//         {/* HEADER */}
//         <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-t-lg shadow-md">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <Button
//                 size="sm"
//                 className="bg-teal-600 hover:bg-teal-700 text-white"
//                 onClick={() => window.history.back()}
//               >
//                 <ChevronLeft className="w-5 h-5 mr-1" /> Back
//               </Button>
//               <div>
//                 <h1 className="text-xl font-bold text-white">{selectedMeeting.title}</h1>
//                 <p className="text-teal-100 text-sm">Meeting ID: {meetingId}</p>
//               </div>
//             </div>
//             {isFinalStatus && (
//               <Badge variant="secondary" className="bg-white text-teal-700">
//                 {selectedMeeting.meetingStatus.toUpperCase()}
//               </Badge>
//             )}
//           </div>
//         </div>
//         <Card className="shadow-lg border-0 rounded-t-none">
//           <CardContent className="p-4 sm:p-6">
//             <Tabs defaultValue="details" className="w-full">
//               <TabsList className="flex w-fit bg-teal-50 rounded-lg p-1 mb-4">
//                 <TabsTrigger value="details" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
//                   Details
//                 </TabsTrigger>
//                 <TabsTrigger value="proposal" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
//                   Proposal
//                 </TabsTrigger>
//                 <TabsTrigger value="mom" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
//                   MOM
//                 </TabsTrigger>
//               </TabsList>
//               <TabsContent value="details">
//                 <MeetingDetailsContent
//                   selectedMeeting={selectedMeeting}
//                   formatDate={formatDate}
//                   formatTime={formatTime}   // NEW: for clean time
//                   formatDateTime={formatDateTime}
//                   hasEndNote={!!selectedMeeting.endNote}
//                   canUpdateStatus={canUpdateStatus}
//                   isFinalStatus={isFinalStatus}
//                   openStatusUpdateModal={openStatusUpdateModal}
//                   setShowReschedule={setShowReschedule}
//                   setIsEditing={setIsEditing}
//                 />
//               </TabsContent>
//               <TabsContent value="proposal">
//                 <ProposalContent contactId={selectedMeeting?.contactId} meetingId={meetingId} />
//               </TabsContent>
//               <TabsContent value="mom">
//                 <MomContent meeting={selectedMeeting} meetingId={meetingId} />
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>
//       </div>
//       {/* === EDIT MODAL (HIDDEN IF FINAL) === */}
//       <Dialog open={isEditing && !isFinalStatus} onOpenChange={setIsEditing}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader>
//             <DialogTitle className="text-teal-700">Edit Meeting</DialogTitle>
//           </DialogHeader>
//           {editForm && (
//             <div className="space-y-4">
//               <div>
//                 <Label>Title <span className="text-red-500">*</span></Label>
//                 <Input
//                   value={editForm.title}
//                   onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div>
//                 <Label>Date <span className="text-red-500">*</span></Label>
//                 <Input
//                   type="date"
//                   value={editForm.date}
//                   onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>Start Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.startTime}
//                     onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//                 <div>
//                   <Label>End Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.endTime}
//                     onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label>Agenda</Label>
//                 <Textarea
//                   value={editForm.agenda}
//                   onChange={(e) => setEditForm({ ...editForm, agenda: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div>
//                 <Label>Mode <span className="text-red-500">*</span></Label>
//                 <select
//                   value={editForm.mode}
//                   onChange={(e) => setEditForm({ ...editForm, mode: e.target.value })}
//                   className="w-full p-2 border border-teal-300 rounded focus:border-teal-600"
//                 >
//                   <option value="online">Online</option>
//                   <option value="offline">Offline</option>
//                 </select>
//               </div>
//               {editForm.mode === "online" && (
//                 <div>
//                   <Label>Join Link <span className="text-red-500">*</span></Label>
//                   <Input
//                     value={editForm.meetingLink}
//                     onChange={(e) => setEditForm({ ...editForm, meetingLink: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//               )}
//               {localError && (
//                 <Alert variant="destructive">
//                   <AlertDescription>{localError}</AlertDescription>
//                 </Alert>
//               )}
//               <div className="flex justify-end gap-2">
//                 <Button
//                   variant="outline"
//                   onClick={() => setIsEditing(false)}
//                   className="border-teal-600 text-teal-600 hover:bg-teal-50"
//                 >
//                   <X className="w-4 h-4 mr-1" /> Cancel
//                 </Button>
//                 <Button
//                   onClick={handleSave}
//                   disabled={updateStatus === "loading"}
//                   className="bg-teal-600 hover:bg-teal-700 text-white"
//                 >
//                   <Save className="w-4 h-4 mr-1" /> Save
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//       {/* === RESCHEDULE MODAL (HIDDEN IF FINAL) === */}
//       <Dialog open={showReschedule && !isFinalStatus} onOpenChange={setShowReschedule}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader>
//             <DialogTitle className="text-teal-700">Reschedule Meeting</DialogTitle>
//           </DialogHeader>
//           {editForm && (
//             <div className="space-y-4">
//               <div>
//                 <Label>Date <span className="text-red-500">*</span></Label>
//                 <Input
//                   type="date"
//                   value={editForm.date}
//                   onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
//                   className="border-teal-300 focus:border-teal-600"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>Start Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.startTime}
//                     onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//                 <div>
//                   <Label>End Time <span className="text-red-500">*</span></Label>
//                   <Input
//                     type="time"
//                     value={editForm.endTime}
//                     onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })}
//                     className="border-teal-300 focus:border-teal-600"
//                   />
//                 </div>
//               </div>
//               {localError && (
//                 <Alert variant="destructive">
//                   <AlertDescription>{localError}</AlertDescription>
//                 </Alert>
//               )}
//               <Button
//                 className="w-full bg-teal-600 hover:bg-teal-700 text-white"
//                 onClick={handleReschedule}
//                 disabled={updateStatus === "loading"}
//               >
//                 Reschedule
//               </Button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//       {/* === STATUS UPDATE MODAL === */}
//       <Dialog open={showStatusUpdate} onOpenChange={setShowStatusUpdate}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader>
//             <DialogTitle className="text-teal-700">
//               {statusUpdateType === "completed" ? "Mark as Completed" : "Cancel Meeting"}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <div>
//               <Label>Feedback Note <span className="text-red-500">*</span></Label>
//               <Textarea
//                 placeholder="Enter note..."
//                 value={endNote}
//                 onChange={(e) => setEndNote(e.target.value)}
//                 className="border-teal-300 focus:border-teal-600"
//               />
//             </div>
//             {localError && (
//               <Alert variant="destructive">
//                 <AlertDescription>{localError}</AlertDescription>
//               </Alert>
//             )}
//             <div className="flex justify-end gap-2">
//               <Button
//                 variant="outline"
//                 onClick={() => {
//                   setShowStatusUpdate(false);
//                   setEndNote("");
//                   setStatusUpdateType(null);
//                 }}
//                 className="border-teal-600 text-teal-600 hover:bg-teal-50"
//               >
//                 <X className="w-4 h-4 mr-1" /> Cancel
//               </Button>
//               <Button
//                 onClick={handleStatusUpdate}
//                 disabled={updateStatus === "loading" || !endNote.trim()}
//                 className="bg-teal-600 hover:bg-teal-700 text-white"
//               >
//                 <Save className="w-4 h-4 mr-1" /> Save
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
// "use client";
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { ChevronLeft, Badge, Save, X } from "lucide-react";
// import { format } from "date-fns";
// import {
//   fetchMeetingById,
//   updateMeeting,
//   clearSelectedMeeting,
//   clearError,
// } from "@/modules/meet/slices/meetSlice";
// import MeetingDetailsContent from "./MeetingDetailsContent";
// import ProposalContent from "./ProposalContent";
// import MomContent from "./MomContent";
// export default function MeetingController({ meetingId }) {
//   const dispatch = useDispatch();
//   const { selectedMeeting, status } = useSelector((state) => state.meet);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState(null);
//   const [showReschedule, setShowReschedule] = useState(false);
//   const [showStatusUpdate, setShowStatusUpdate] = useState(false);
//   const [statusUpdateType, setStatusUpdateType] = useState(null);
//   const [endNote, setEndNote] = useState("");
//   const [localError, setLocalError] = useState(null);
//   const [updateStatus, setUpdateStatus] = useState("idle");
//   const [activeTab, setActiveTab] = useState("details");
//   const [tabLoading, setTabLoading] = useState(false);
//   // 2-second initial skeleton (always shown first)
//   const [initialLoading, setInitialLoading] = useState(true);
//   const isFinalStatus = ["completed", "canceled"].includes(selectedMeeting?.meetingStatus);
//   const canUpdateStatus = ["scheduled", "rescheduled"].includes(selectedMeeting?.meetingStatus);
//   // 2-second skeleton timer
//   useEffect(() => {
//     const timer = setTimeout(() => setInitialLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);
//   // Fetch meeting only after skeleton
//   useEffect(() => {
//     if (meetingId && !initialLoading) {
//       dispatch(fetchMeetingById(meetingId));
//     }
//     return () => {
//       dispatch(clearSelectedMeeting());
//       dispatch(clearError());
//     };
//   }, [dispatch, meetingId, initialLoading]);
//   // Re-fetch after any update
//   const refetchMeeting = () => {
//     dispatch(fetchMeetingById(meetingId));
//   };
//   // Sync edit form
//   useEffect(() => {
//     if (selectedMeeting) {
//       try {
//         setEditForm({
//           title: selectedMeeting.title || "",
//           date: selectedMeeting.date ? format(new Date(selectedMeeting.date), "yyyy-MM-dd") : "",
//           startTime: selectedMeeting.startTime
//             ? format(new Date(selectedMeeting.startTime), "HH:mm")
//             : "",
//           endTime: selectedMeeting.endTime
//             ? format(new Date(selectedMeeting.endTime), "HH:mm")
//             : "",
//           agenda: selectedMeeting.agenda || "",
//           mode: selectedMeeting.mode || "online",
//           meetingLink: selectedMeeting.meetingLink || "",
//           meetingStatus: selectedMeeting.meetingStatus || "scheduled",
//         });
//         setLocalError(null);
//       } catch (err) {
//         setLocalError("Invalid meeting data format.");
//       }
//     }
//   }, [selectedMeeting]);
//   const formatDate = (dateStr) => (!dateStr ? "N/A" : format(new Date(dateStr), "MMM d, yyyy"));
//   const formatTime = (dateStr) => (!dateStr ? "N/A" : format(new Date(dateStr), "h:mm a"));
//   const formatDateTime = (dateStr) => (!dateStr ? "N/A" : format(new Date(dateStr), "MMM d, yyyy h:mm a"));
//   const handleTabChange = (value) => {
//     setTabLoading(true);
//     setActiveTab(value);
//     setTimeout(() => setTabLoading(false), 500);
//   };
//   const handleSave = async () => {
//     if (isFinalStatus) return setLocalError("Cannot edit a completed or canceled meeting.");
//     if (!editForm?.title || !editForm.date || !editForm.startTime || !editForm.endTime)
//       return setLocalError("Please fill all required fields.");
//     if (editForm.mode === "online" && !editForm.meetingLink)
//       return setLocalError("Please provide a meeting link for online mode.");
//     try {
//       setLocalError(null);
//       setUpdateStatus("loading");
//       await dispatch(updateMeeting({ meetingId, updates: { ...editForm, startTime: `${editForm.date}T${editForm.startTime}:00.000Z`, endTime: `${editForm.date}T${editForm.endTime}:00.000Z` } })).unwrap();
//       setIsEditing(false);
//       refetchMeeting();
//     } catch (err) {
//       setLocalError(err?.message || "Failed to update meeting.");
//     } finally {
//       setUpdateStatus("idle");
//     }
//   };
//   const handleReschedule = async () => {
//     if (isFinalStatus) return setLocalError("Cannot reschedule a completed or canceled meeting.");
//     if (!editForm?.date || !editForm.startTime || !editForm.endTime)
//       return setLocalError("Please select date and time.");
//     try {
//       setLocalError(null);
//       setUpdateStatus("loading");
//       await dispatch(updateMeeting({ meetingId, updates: { startTime: `${editForm.date}T${editForm.startTime}:00.000Z`, endTime: `${editForm.date}T${editForm.endTime}:00.000Z`, meetingStatus: "rescheduled" } })).unwrap();
//       setShowReschedule(false);
//       refetchMeeting();
//     } catch (err) {
//       setLocalError(err?.message || "Failed to reschedule.");
//     } finally {
//       setUpdateStatus("idle");
//     }
//   };
//   const handleStatusUpdate = async () => {
//     if (!endNote.trim()) return setLocalError("Feedback note is required.");
//     try {
//       setLocalError(null);
//       setUpdateStatus("loading");
//       await dispatch(updateMeeting({ meetingId, updates: { meetingStatus: statusUpdateType, endNote: endNote.trim() } })).unwrap();
//       setShowStatusUpdate(false);
//       setEndNote("");
//       setStatusUpdateType(null);
//       refetchMeeting();
//     } catch (err) {
//       setLocalError(err?.message || "Failed to update status.");
//     } finally {
//       setUpdateStatus("idle");
//     }
//   };
//   const openStatusUpdateModal = (type) => {
//     setStatusUpdateType(type);
//     setShowStatusUpdate(true);
//   };
//   // 1. SHOW SKELETON (2 seconds or while loading)
//   if (initialLoading || status === "loading") {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 shadow-md">
//           <div className="max-w-6xl mx-auto flex items-center justify-between animate-pulse">
//             <div className="flex items-center gap-4">
//               <Button size="sm" className="bg-teal-700 hover:bg-teal-800 text-white">
//                 <ChevronLeft className="w-5 h-5 mr-1" /> Back
//               </Button>
//               <div>
//                 <Skeleton className="h-8 w-80 bg-teal-400" />
//                 <Skeleton className="h-4 w-40 mt-2 bg-teal-300" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-6xl mx-auto p-6 space-y-6">
//           <Card className="shadow-lg border-0">
//             <CardContent className="p-6 space-y-8">
//               <Skeleton className="h-12 w-full rounded-lg" />
//               <Skeleton className="h-10 w-96" />
//               <div className="grid lg:grid-cols-5 gap-6">
//                 <div className="lg:col-span-4 space-y-6">
//                   <Skeleton className="h-32 w-full rounded-lg" />
//                   <Skeleton className="h-48 w-full rounded-lg" />
//                   <Skeleton className="h-24 w-full rounded-lg" />
//                 </div>
//                 <div className="space-y-6">
//                   <Skeleton className="h-32 w-full rounded-lg" />
//                   <Skeleton className="h-32 w-full rounded-lg" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }
//   // 2. ONLY SHOW "NOT FOUND" IF REALLY FAILED (NO FLASH!)
//   if (status === "failed" || (status === "succeeded" && !selectedMeeting)) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="text-center max-w-lg">
//           <div className="w-40 h-40 mx-auto mb-8 bg-gray-200 border-2 border-dashed rounded-full animate-pulse" />
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Meeting Not Found</h1>
//           <p className="text-gray-600 text-lg mb-8">
//             The meeting you're looking for doesn't exist or has been removed.
//           </p>
//           <Button
//             onClick={() => window.history.back()}
//             size="lg"
//             className="bg-teal-600 hover:bg-teal-700 text-white"
//           >
//             <ChevronLeft className="w-5 h-5 mr-2" />
//             Go Back
//           </Button>
//         </div>
//       </div>
//     );
//   }
//   // 3. MAIN CONTENT (only when we have real data)
//   if (!selectedMeeting) return null; // safety
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto max-w-7xl">
//         {/* HEADER */}
//         <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-t-lg shadow-md">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <Button
//                 size="sm"
//                 className="bg-teal-600 hover:bg-teal-700 text-white"
//                 onClick={() => window.history.back()}
//               >
//                 <ChevronLeft className="w-5 h-5 mr-1" /> Back
//               </Button>
//               <div>
//                 <h1 className="text-xl font-bold text-white">{selectedMeeting.title}</h1>
//                 <p className="text-teal-100 text-sm">Meeting ID: {meetingId}</p>
//               </div>
//             </div>
//             {isFinalStatus && (
//               <Badge variant="secondary" className="bg-white text-teal-700 text-lg px-4 py-2">
//                 {selectedMeeting.meetingStatus.toUpperCase()}
//               </Badge>
//             )}
//           </div>
//         </div>
//         <Card className="shadow-lg border-0 rounded-t-none">
//           <CardContent className="p-4 sm:p-6">
//             <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
//               <TabsList className="flex w-fit bg-teal-50 rounded-lg p-1 mb-6">
//                 <TabsTrigger value="details" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
//                   Details
//                 </TabsTrigger>
//                 <TabsTrigger value="proposal" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
//                   Proposal
//                 </TabsTrigger>
//                 <TabsTrigger value="mom" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
//                   MOM
//                 </TabsTrigger>
//               </TabsList>
//               {tabLoading ? (
//                 <div className="py-12 space-y-6">
//                   <Skeleton className="h-10 w-96" />
//                   <Skeleton className="h-32 w-full rounded-lg" />
//                   <Skeleton className="h-48 w-full rounded-lg" />
//                   <Skeleton className="h-24 w-full rounded-lg" />
//                 </div>
//               ) : (
//                 <>
//                   <TabsContent value="details">
//                     <MeetingDetailsContent
//                       selectedMeeting={selectedMeeting}
//                       formatDate={formatDate}
//                       formatTime={formatTime}
//                       formatDateTime={formatDateTime}
//                       hasEndNote={!!selectedMeeting.endNote}
//                       canUpdateStatus={canUpdateStatus}
//                       isFinalStatus={isFinalStatus}
//                       openStatusUpdateModal={openStatusUpdateModal}
//                       setShowReschedule={setShowReschedule}
//                       setIsEditing={setIsEditing}
//                     />
//                   </TabsContent>
//                   <TabsContent value="proposal">
//                     <ProposalContent contactId={selectedMeeting?.contactId} meetingId={meetingId} />
//                   </TabsContent>
//                   <TabsContent value="mom">
//                     <MomContent meeting={selectedMeeting} meetingId={meetingId} />
//                   </TabsContent>
//                 </>
//               )}
//             </Tabs>
//           </CardContent>
//         </Card>
//       </div>
//       {/* ALL MODALS (exactly same as before - no change in look) */}
//       <Dialog open={isEditing && !isFinalStatus} onOpenChange={setIsEditing}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader><DialogTitle className="text-teal-700">Edit Meeting</DialogTitle></DialogHeader>
//           {editForm && (
//             <div className="space-y-4">
//               <div><Label>Title <span className="text-red-500">*</span></Label><Input value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//               <div><Label>Date <span className="text-red-500">*</span></Label><Input type="date" value={editForm.date} onChange={(e) => setEditForm({ ...editForm, date: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div><Label>Start Time <span className="text-red-500">*</span></Label><Input type="time" value={editForm.startTime} onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//                 <div><Label>End Time <span className="text-red-500">*</span></Label><Input type="time" value={editForm.endTime} onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//               </div>
//               <div><Label>Agenda</Label><Textarea value={editForm.agenda} onChange={(e) => setEditForm({ ...editForm, agenda: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//               <div><Label>Mode <span className="text-red-500">*</span></Label>
//                 <select value={editForm.mode} onChange={(e) => setEditForm({ ...editForm, mode: e.target.value })} className="w-full p-2 border border-teal-300 rounded focus:border-teal-600">
//                   <option value="online">Online</option><option value="offline">Offline</option>
//                 </select>
//               </div>
//               {editForm.mode === "online" && (
//                 <div><Label>Join Link <span className="text-red-500">*</span></Label><Input value={editForm.meetingLink} onChange={(e) => setEditForm({ ...editForm, meetingLink: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//               )}
//               {localError && <p className="text-red-600 text-sm">{localError}</p>}
//               <div className="flex justify-end gap-2">
//                 <Button variant="outline" onClick={() => setIsEditing(false)} className="border-teal-600 text-teal-600 hover:bg-teal-50"><X className="w-4 h-4 mr-1" /> Cancel</Button>
//                 <Button onClick={handleSave} disabled={updateStatus === "loading"} className="bg-teal-600 hover:bg-teal-700 text-white"><Save className="w-4 h-4 mr-1" /> Save Changes</Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//       <Dialog open={showReschedule && !isFinalStatus} onOpenChange={setShowReschedule}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader><DialogTitle className="text-teal-700">Reschedule Meeting</DialogTitle></DialogHeader>
//           {editForm && (
//             <div className="space-y-4">
//               <div><Label>New Date <span className="text-red-500">*</span></Label><Input type="date" value={editForm.date} onChange={(e) => setEditForm({ ...editForm, date: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div><Label>Start Time <span className="text-red-500">*</span></Label><Input type="time" value={editForm.startTime} onChange={(e) => setEditForm({ ...editForm, startTime: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//                 <div><Label>End Time <span className="text-red-500">*</span></Label><Input type="time" value={editForm.endTime} onChange={(e) => setEditForm({ ...editForm, endTime: e.target.value })} className="border-teal-300 focus:border-teal-600" /></div>
//               </div>
//               {localError && <p className="text-red-600 text-sm">{localError}</p>}
//               <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" onClick={handleReschedule} disabled={updateStatus === "loading"}>Confirm Reschedule</Button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//       <Dialog open={showStatusUpdate} onOpenChange={setShowStatusUpdate}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader><DialogTitle className="text-teal-700">{statusUpdateType === "completed" ? "Mark as Completed" : "Cancel Meeting"}</DialogTitle></DialogHeader>
//           <div className="space-y-4">
//             <div><Label>Feedback Note <span className="text-red-500">*</span></Label><Textarea placeholder="Please share your feedback or reason..." value={endNote} onChange={(e) => setEndNote(e.target.value)} className="border-teal-300 focus:border-teal-600 min-h-32" /></div>
//             {localError && <p className="text-red-600 text-sm">{localError}</p>}
//             <div className="flex justify-end gap-2">
//               <Button variant="outline" onClick={() => { setShowStatusUpdate(false); setEndNote(""); setStatusUpdateType(null); }} className="border-teal-600 text-teal-600 hover:bg-teal-50"><X className="w-4 h-4 mr-1" /> Cancel</Button>
//               <Button onClick={handleStatusUpdate} disabled={updateStatus === "loading" || !endNote.trim()} className="bg-teal-600 hover:bg-teal-700 text-white"><Save className="w-4 h-4 mr-1" /> Confirm</Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>MeetingController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge.js [app-client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/slices/meetSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$MeetingDetailsContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/components/MeetingDetailsContent.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$ProposalContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/components/ProposalContent.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$MomContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/components/MomContent.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MeetingController({ meetingId }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { selectedMeeting, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "MeetingController.useSelector": (state)=>state.meet
    }["MeetingController.useSelector"]);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showReschedule, setShowReschedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showStatusUpdate, setShowStatusUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusUpdateType, setStatusUpdateType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [endNote, setEndNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localError, setLocalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updateStatus, setUpdateStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    const [tabLoading, setTabLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialLoading, setInitialLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const isFinalStatus = [
        "completed",
        "canceled"
    ].includes(selectedMeeting?.meetingStatus);
    const canUpdateStatus = [
        "scheduled",
        "rescheduled"
    ].includes(selectedMeeting?.meetingStatus);
    // 2-second premium skeleton
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeetingController.useEffect": ()=>{
            const timer = setTimeout({
                "MeetingController.useEffect.timer": ()=>setInitialLoading(false)
            }["MeetingController.useEffect.timer"], 2000);
            return ({
                "MeetingController.useEffect": ()=>clearTimeout(timer)
            })["MeetingController.useEffect"];
        }
    }["MeetingController.useEffect"], []);
    // Fetch meeting only after skeleton
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeetingController.useEffect": ()=>{
            if (meetingId && !initialLoading) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMeetingById"])(meetingId));
            }
            return ({
                "MeetingController.useEffect": ()=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSelectedMeeting"])());
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearError"])());
                }
            })["MeetingController.useEffect"];
        }
    }["MeetingController.useEffect"], [
        dispatch,
        meetingId,
        initialLoading
    ]);
    // Re-fetch after any update
    const refetchMeeting = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMeetingById"])(meetingId));
    };
    // Sync edit form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeetingController.useEffect": ()=>{
            if (selectedMeeting) {
                try {
                    setEditForm({
                        title: selectedMeeting.title || "",
                        date: selectedMeeting.date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(selectedMeeting.date), "yyyy-MM-dd") : "",
                        startTime: selectedMeeting.startTime ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(selectedMeeting.startTime), "HH:mm") : "",
                        endTime: selectedMeeting.endTime ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(selectedMeeting.endTime), "HH:mm") : "",
                        agenda: selectedMeeting.agenda || "",
                        mode: selectedMeeting.mode || "online",
                        meetingLink: selectedMeeting.meetingLink || "",
                        meetingStatus: selectedMeeting.meetingStatus || "scheduled"
                    });
                    setLocalError(null);
                } catch (err) {
                    setLocalError("Invalid meeting data.");
                }
            }
        }
    }["MeetingController.useEffect"], [
        selectedMeeting
    ]);
    const formatDate = (d)=>!d ? "N/A" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(d), "MMM d, yyyy");
    const formatTime = (d)=>!d ? "N/A" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(d), "h:mm a");
    const formatDateTime = (d)=>!d ? "N/A" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(d), "MMM d, yyyy h:mm a");
    const handleTabChange = (value)=>{
        setTabLoading(true);
        setActiveTab(value);
        setTimeout(()=>setTabLoading(false), 500);
    };
    const handleSave = async ()=>{
        if (isFinalStatus) return setLocalError("Cannot edit a completed or canceled meeting.");
        if (!editForm?.title || !editForm.date || !editForm.startTime || !editForm.endTime) return setLocalError("Please fill all required fields.");
        if (editForm.mode === "online" && !editForm.meetingLink) return setLocalError("Please provide a meeting link for online mode.");
        try {
            setLocalError(null);
            setUpdateStatus("loading");
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMeeting"])({
                meetingId,
                updates: {
                    title: editForm.title,
                    agenda: editForm.agenda,
                    mode: editForm.mode,
                    meetingLink: editForm.mode === "online" ? editForm.meetingLink : null,
                    meetingStatus: editForm.meetingStatus,
                    startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
                    endTime: `${editForm.date}T${editForm.endTime}:00.000Z`
                }
            })).unwrap();
            setIsEditing(false);
            refetchMeeting();
        } catch (err) {
            setLocalError(err?.message || "Failed to update meeting.");
        } finally{
            setUpdateStatus("idle");
        }
    };
    const handleReschedule = async ()=>{
        if (isFinalStatus) return setLocalError("Cannot reschedule a completed or canceled meeting.");
        if (!editForm?.date || !editForm.startTime || !editForm.endTime) return setLocalError("Please select date and time.");
        try {
            setLocalError(null);
            setUpdateStatus("loading");
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMeeting"])({
                meetingId,
                updates: {
                    startTime: `${editForm.date}T${editForm.startTime}:00.000Z`,
                    endTime: `${editForm.date}T${editForm.endTime}:00.000Z`,
                    meetingStatus: "rescheduled"
                }
            })).unwrap();
            setShowReschedule(false);
            refetchMeeting();
        } catch (err) {
            setLocalError(err?.message || "Failed to reschedule.");
        } finally{
            setUpdateStatus("idle");
        }
    };
    const handleStatusUpdate = async ()=>{
        if (!endNote.trim()) return setLocalError("Feedback note is required.");
        try {
            setLocalError(null);
            setUpdateStatus("loading");
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$slices$2f$meetSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMeeting"])({
                meetingId,
                updates: {
                    meetingStatus: statusUpdateType,
                    endNote: endNote.trim()
                }
            })).unwrap();
            setShowStatusUpdate(false);
            setEndNote("");
            setStatusUpdateType(null);
            refetchMeeting();
        } catch (err) {
            setLocalError(err?.message || "Failed to update status.");
        } finally{
            setUpdateStatus("idle");
        }
    };
    const openStatusUpdateModal = (type)=>{
        setStatusUpdateType(type);
        setShowStatusUpdate(true);
    };
    // 1. SKELETON — always 2 seconds + while loading
    if (initialLoading || status === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-teal-600 to-cyan-600 p-4 shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto flex items-center justify-between animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "bg-teal-700 hover:bg-teal-800 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "w-5 h-5 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1120,
                                            columnNumber: 17
                                        }, this),
                                        " Back"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-8 w-80 bg-teal-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-4 w-40 mt-2 bg-teal-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                    lineNumber: 1116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto p-6 space-y-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-lg border-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-12 w-full rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 w-96"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-5 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-4 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-32 w-full rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-48 w-full rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-24 w-full rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1138,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-32 w-full rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-32 w-full rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1142,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                    lineNumber: 1129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/meet/components/MeetingController.js",
            lineNumber: 1115,
            columnNumber: 7
        }, this);
    }
    // 2. MEETING NOT FOUND — ALWAYS SHOW THIS (NO BLANK PAGE EVER!)
    const meetingNotFound = status === "failed" || status === "succeeded" && !selectedMeeting;
    if (meetingNotFound) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-40 h-40 mx-auto mb-8 bg-gray-200 border-2 border-dashed rounded-full animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-gray-800 mb-4",
                        children: "Meeting Not Found"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-lg mb-8",
                        children: "The meeting you're looking for doesn't exist or has been removed."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>window.history.back(),
                        size: "lg",
                        className: "bg-teal-600 hover:bg-teal-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                lineNumber: 1169,
                                columnNumber: 13
                            }, this),
                            "Go Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                lineNumber: 1158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/meet/components/MeetingController.js",
            lineNumber: 1157,
            columnNumber: 7
        }, this);
    }
    // 3. MAIN CONTENT — only when meeting exists
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-t-lg shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            className: "bg-teal-600 hover:bg-teal-700 text-white",
                                            onClick: ()=>window.history.back(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "w-5 h-5 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1190,
                                                    columnNumber: 17
                                                }, this),
                                                " Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl font-bold text-white",
                                                    children: selectedMeeting?.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1193,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-teal-100 text-sm",
                                                    children: [
                                                        "Meeting ID: ",
                                                        meetingId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1192,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1184,
                                    columnNumber: 13
                                }, this),
                                isFinalStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                    variant: "secondary",
                                    className: "bg-white text-teal-700 text-lg px-4 py-2",
                                    children: selectedMeeting.meetingStatus.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shadow-lg border-0 rounded-t-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4 sm:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                value: activeTab,
                                onValueChange: handleTabChange,
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                        className: "flex w-fit bg-teal-50 rounded-lg p-1 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "details",
                                                className: "data-[state=active]:bg-teal-600 data-[state=active]:text-white",
                                                children: "Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "proposal",
                                                className: "data-[state=active]:bg-teal-600 data-[state=active]:text-white",
                                                children: "Proposal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "mom",
                                                className: "data-[state=active]:bg-teal-600 data-[state=active]:text-white",
                                                children: "MOM"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                        lineNumber: 1208,
                                        columnNumber: 15
                                    }, this),
                                    tabLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-12 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-96"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1222,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-32 w-full rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1223,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-48 w-full rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1224,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-24 w-full rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1225,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                        lineNumber: 1221,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                value: "details",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$MeetingDetailsContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    selectedMeeting: selectedMeeting,
                                                    formatDate: formatDate,
                                                    formatTime: formatTime,
                                                    formatDateTime: formatDateTime,
                                                    hasEndNote: !!selectedMeeting.endNote,
                                                    canUpdateStatus: canUpdateStatus,
                                                    isFinalStatus: isFinalStatus,
                                                    openStatusUpdateModal: openStatusUpdateModal,
                                                    setShowReschedule: setShowReschedule,
                                                    setIsEditing: setIsEditing
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1230,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1229,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                value: "proposal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$ProposalContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    contactId: selectedMeeting?.contactId,
                                                    meetingId: meetingId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1244,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1243,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                value: "mom",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$MomContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    meeting: selectedMeeting,
                                                    meetingId: meetingId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1247,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                lineNumber: 1246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                lineNumber: 1207,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1206,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/meet/components/MeetingController.js",
                        lineNumber: 1205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                lineNumber: 1180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isEditing && !isFinalStatus,
                onOpenChange: setIsEditing,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-teal-700",
                                children: "Edit Meeting"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                lineNumber: 1260,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1259,
                            columnNumber: 11
                        }, this),
                        editForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: [
                                                "Title ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1265,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1265,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: editForm.title,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    title: e.target.value
                                                }),
                                            className: "border-teal-300 focus:border-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1266,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: [
                                                "Date ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1269,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1269,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "date",
                                            value: editForm.date,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    date: e.target.value
                                                }),
                                            className: "border-teal-300 focus:border-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1270,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: [
                                                        "Start Time ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                            lineNumber: 1274,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1274,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "time",
                                                    value: editForm.startTime,
                                                    onChange: (e)=>setEditForm({
                                                            ...editForm,
                                                            startTime: e.target.value
                                                        }),
                                                    className: "border-teal-300 focus:border-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1275,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: [
                                                        "End Time ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                            lineNumber: 1278,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "time",
                                                    value: editForm.endTime,
                                                    onChange: (e)=>setEditForm({
                                                            ...editForm,
                                                            endTime: e.target.value
                                                        }),
                                                    className: "border-teal-300 focus:border-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1279,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1277,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: "Agenda"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1283,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            value: editForm.agenda,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    agenda: e.target.value
                                                }),
                                            className: "border-teal-300 focus:border-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1282,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: [
                                                "Mode ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1287,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1287,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editForm.mode,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    mode: e.target.value
                                                }),
                                            className: "w-full p-2 border border-teal-300 rounded focus:border-teal-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "online",
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "offline",
                                                    children: "Offline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1290,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1288,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1286,
                                    columnNumber: 15
                                }, this),
                                editForm.mode === "online" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: [
                                                "Join Link ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1295,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1295,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: editForm.meetingLink,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    meetingLink: e.target.value
                                                }),
                                            className: "border-teal-300 focus:border-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1296,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1294,
                                    columnNumber: 17
                                }, this),
                                localError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm",
                                    children: localError
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1299,
                                    columnNumber: 30
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: ()=>setIsEditing(false),
                                            className: "border-teal-600 text-teal-600 hover:bg-teal-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1302,
                                                    columnNumber: 19
                                                }, this),
                                                " Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1301,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleSave,
                                            disabled: updateStatus === "loading",
                                            className: "bg-teal-600 hover:bg-teal-700 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1305,
                                                    columnNumber: 19
                                                }, this),
                                                " Save Changes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1304,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1300,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1263,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                    lineNumber: 1258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                lineNumber: 1257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showReschedule && !isFinalStatus,
                onOpenChange: setShowReschedule,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-teal-700",
                                children: "Reschedule Meeting"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                lineNumber: 1317,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1316,
                            columnNumber: 11
                        }, this),
                        editForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: [
                                                "New Date ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1322,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1322,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "date",
                                            value: editForm.date,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    date: e.target.value
                                                }),
                                            className: "border-teal-300 focus:border-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1323,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: [
                                                        "Start Time ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                            lineNumber: 1327,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "time",
                                                    value: editForm.startTime,
                                                    onChange: (e)=>setEditForm({
                                                            ...editForm,
                                                            startTime: e.target.value
                                                        }),
                                                    className: "border-teal-300 focus:border-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1328,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    children: [
                                                        "End Time ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                            lineNumber: 1331,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1331,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "time",
                                                    value: editForm.endTime,
                                                    onChange: (e)=>setEditForm({
                                                            ...editForm,
                                                            endTime: e.target.value
                                                        }),
                                                    className: "border-teal-300 focus:border-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1332,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1325,
                                    columnNumber: 15
                                }, this),
                                localError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm",
                                    children: localError
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1335,
                                    columnNumber: 30
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full bg-teal-600 hover:bg-teal-700 text-white",
                                    onClick: handleReschedule,
                                    disabled: updateStatus === "loading",
                                    children: "Confirm Reschedule"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1336,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1320,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                    lineNumber: 1315,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                lineNumber: 1314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showStatusUpdate,
                onOpenChange: setShowStatusUpdate,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-teal-700",
                                children: statusUpdateType === "completed" ? "Mark as Completed" : "Cancel Meeting"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                lineNumber: 1348,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            children: [
                                                "Feedback Note ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1354,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            placeholder: "Please share your feedback or reason...",
                                            value: endNote,
                                            onChange: (e)=>setEndNote(e.target.value),
                                            className: "border-teal-300 focus:border-teal-600 min-h-32"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1355,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1353,
                                    columnNumber: 13
                                }, this),
                                localError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm",
                                    children: localError
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1362,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: ()=>{
                                                setShowStatusUpdate(false);
                                                setEndNote("");
                                                setStatusUpdateType(null);
                                            },
                                            className: "border-teal-600 text-teal-600 hover:bg-teal-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1373,
                                                    columnNumber: 17
                                                }, this),
                                                " Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleStatusUpdate,
                                            disabled: updateStatus === "loading" || !endNote.trim(),
                                            className: "bg-teal-600 hover:bg-teal-700 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                                    lineNumber: 1380,
                                                    columnNumber: 17
                                                }, this),
                                                " Confirm"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                            lineNumber: 1375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                                    lineNumber: 1363,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/meet/components/MeetingController.js",
                            lineNumber: 1352,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/meet/components/MeetingController.js",
                    lineNumber: 1346,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/meet/components/MeetingController.js",
                lineNumber: 1345,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/meet/components/MeetingController.js",
        lineNumber: 1179,
        columnNumber: 5
    }, this);
}
_s(MeetingController, "qkmnChIpDeG2HBBSLxg8EiPHtCA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = MeetingController;
var _c;
__turbopack_context__.k.register(_c, "MeetingController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(protected)/meet/[meeting_id]/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/meeting/[Id]/page.js
__turbopack_context__.s({
    "default": (()=>MeetingControllerPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$MeetingController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/meet/components/MeetingController.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MeetingControllerPage() {
    _s();
    const { meeting_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(); // Extract meeting ID from URL
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$meet$2f$components$2f$MeetingController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        meetingId: meeting_id
    }, void 0, false, {
        fileName: "[project]/src/app/(protected)/meet/[meeting_id]/page.jsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(MeetingControllerPage, "EmnluYQtbApGTerWPwg+As69eY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = MeetingControllerPage;
var _c;
__turbopack_context__.k.register(_c, "MeetingControllerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_79f73b2f._.js.map