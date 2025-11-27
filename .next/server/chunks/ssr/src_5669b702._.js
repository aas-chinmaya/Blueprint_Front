module.exports = {

"[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-lg border bg-card text-card-foreground shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 109,
        columnNumber: 3
    }, this));
Card.displayName = 'Card';
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1.5 p-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 134,
        columnNumber: 3
    }, this));
CardHeader.displayName = 'CardHeader';
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-2xl font-semibold leading-none tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 143,
        columnNumber: 3
    }, this));
CardTitle.displayName = 'CardTitle';
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm text-muted-foreground', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 155,
        columnNumber: 3
    }, this));
CardDescription.displayName = 'CardDescription';
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 164,
        columnNumber: 3
    }, this));
CardContent.displayName = 'CardContent';
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 169,
        columnNumber: 3
    }, this));
CardFooter.displayName = 'CardFooter';
}}),
"[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/modules/project-management/task/components/sub-task/SubTaskList.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// "use client";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   CheckCircle2,
//   Edit,
//   Eye,
//   Plus,
//   Trash2,
//   ChevronLeft,
//   ChevronRight,
//   Lock,
//   ListTodo,
// } from "lucide-react";
// import CreateSubtaskModal from "@/modules/project-management/task/components/sub-task/CreateSubTaskModal";
// import EditSubtaskModal from "@/modules/project-management/task/components/sub-task/EditSubTaskModal";
// import DeleteSubtaskModal from "@/modules/project-management/task/components/sub-task/DeleteSubTaskModal";
// import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
// import { useRouter } from "next/navigation";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { fetchProjectById } from "@/modules/project-management/project/slices/projectSlice";
// import { cn } from "@/lib/utils";
// const SubTaskList = ({ task, taskId, projectId, isTaskClosed }) => {
//     const { project, status, successMessage } = useSelector(
//     (state) => state.project
//   );
//     const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { subtasks, loading, error } = useSelector((state) => state.subTask);
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const subtasksPerPage = 5;
//   const safeSubtasks = Array.isArray(subtasks) ? subtasks : [];
//   const totalPages = Math.ceil(safeSubtasks.length / subtasksPerPage);
//   const indexOfLastSubtask = currentPage * subtasksPerPage;
//   const indexOfFirstSubtask = indexOfLastSubtask - subtasksPerPage;
//   const currentSubtasks = safeSubtasks.slice(
//     indexOfFirstSubtask,
//     indexOfLastSubtask
//   );
//   // Fetch subtasks on mount and when taskId changes
//   useEffect(() => {
//     if (taskId) {
//       dispatch(fetchSubTasksByTaskId(taskId));
//     }
//   }, [dispatch, subtasks?.length, taskId]);
//   useEffect(() => {
//           dispatch(fetchProjectById(projectId));
//   }, [dispatch]);
//   // Modal states
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openAdd, setOpenAdd] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedSubtask, setSelectedSubtask] = useState(null);
//   // Calculate progress
//   const completedSubtasks = safeSubtasks.filter(
//     (st) => st.status === "Completed"
//   ).length;
//   const progress =
//     safeSubtasks.length > 0
//       ? (completedSubtasks / safeSubtasks.length) * 100
//       : 0;
//   // Handlers
//   // const handleView = (subtask) => {
//   //   router.push(`/task/${taskId}/${subtask.subtask_id}`);
//   // };
//   const handleView = (subtask) => {
//     router.push(`/workspace/task/${taskId}/${subtask.subtask_id}`);
//   };
//   const handleEdit = (subtask) => {
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenEdit(true);
//   };
//   const handleDelete = (subtask) => {
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenDelete(true);
//     // Adjust page if deleting the last subtask on the current page
//     if (currentSubtasks.length === 1 && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };
//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };
//   const getStatusVariant = (status) => {
//     if (status === "Completed") return "success";
//     if (status === "In Progress") return "warning";
//     return "secondary"; // For Pending
//   };
//   return (
//     <section>
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-base sm:text-lg font-semibold flex items-center">
//           <ListTodo className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
//           Subtasks
//         </h3>
//         {/* {!isTaskClosed &&  currentUser?.role === "cpc"||currentUser?.role === "Team Lead" || isTeamLead ? (
//           <Button
//             className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
//             onClick={() => setOpenAdd(true)}
//             disabled={isTaskClosed}
//           >
//             <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Add
//           </Button>
//         ) : (
//           <Badge
//             variant="secondary"
//             className="flex items-center text-xs sm:text-sm"
//           >
//             <Lock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Read-Only
//           </Badge>
//         )} */}
//         {!isTaskClosed && (
//   <Button
//     className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
//     onClick={() => setOpenAdd(true)}
//   >
//     <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Add
//   </Button>
// )}
//       </div>
//       <div className="mb-3">
//         <div className="flex justify-between items-center mb-2">
//           <span className="font-medium text-xs sm:text-sm">
//             Progress: {progress.toFixed(0)}%
//           </span>
//           <Badge
//             variant={progress === 100 ? "success" : "default"}
//             className="text-xs sm:text-sm"
//           >
//             {completedSubtasks}/{safeSubtasks.length} Completed
//           </Badge>
//         </div>
//         <Progress value={progress} className="h-2 bg-gray-200" />
//       </div>
//       {loading && (
//         <div className="text-center text-sm text-gray-500">
//           Loading subtasks...
//         </div>
//       )}
//       {!loading && !error && safeSubtasks.length === 0 && (
//         <div className="text-center text-sm text-gray-500">
//           No subtasks available
//         </div>
//       )}
//       {!loading && !error && safeSubtasks.length > 0 && (
//         <ul className="space-y-2">
//           {currentSubtasks.map((st) => (
//             <li
//               key={st.subtask_id}
//               className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2 sm:p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
//             >
//               <div className="flex-1 flex items-center">
//                 <CheckCircle2
//                   className={`mr-2 h-3 w-3 sm:h-4 sm:w-4 ${
//                     st.status === "Completed"
//                       ? "text-green-500"
//                       : st.status === "In Progress"
//                       ? "text-yellow-500"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <span className="font-medium text-xs sm:text-sm">
//                   {st.title}
//                 </span>
//               </div>
//               <div className="flex items-center gap-1 sm:gap-2">
//                                            {st.isResolved === false && (
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <span
//                         className={cn(
//                           "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap cursor-default",
//                           "bg-red-100 text-red-700"
//                         )}
//                       >
//                         Bug Found
//                       </span>
//                     </TooltipTrigger>
//                     <TooltipContent className="text-xs px-2 py-1 rounded shadow-md bg-red-600 text-white">
//                       Bug is active. Resolve now!
//                     </TooltipContent>
//                   </Tooltip>
//                 )}
//                 <Badge
//                   variant={getStatusVariant(st.status)}
//                   className="text-xs sm:text-sm"
//                 >
//                   {st.status}
//                 </Badge>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleView(st)}
//                       className="h-7 w-7 sm:h-8 sm:w-8"
//                     >
//                       <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>View</TooltipContent>
//                 </Tooltip>
//                 {!isTaskClosed && (
//                   <>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => handleEdit(st)}
//                           disabled={isTaskClosed}
//                           className="h-7 w-7 sm:h-8 sm:w-8"
//                         >
//                           <Edit className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Edit</TooltipContent>
//                     </Tooltip>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => handleDelete(st)}
//                           disabled={isTaskClosed}
//                           className="h-7 w-7 sm:h-8 sm:w-8"
//                         >
//                           <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Delete</TooltipContent>
//                     </Tooltip>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-3 mt-3">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//             className="h-8 w-8 sm:h-9 sm:w-9"
//           >
//             <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
//           </Button>
//           <span className="text-xs sm:text-sm font-medium">
//             Page {currentPage} of {totalPages}
//           </span>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="h-8 w-8 sm:h-9 sm:w-9"
//           >
//             <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
//           </Button>
//         </div>
//       )}
//       {/* Create, Edit, Delete Modals */}
//       <CreateSubtaskModal
//         open={openAdd}
//         setOpen={setOpenAdd}
//         taskDetails={task}
//         taskId={taskId}
//         projectId={projectId}
//       />
//       {selectedSubtask && (
//         <EditSubtaskModal
//         onSubtaskEdit={() => {
//       dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
//     }}
//           open={openEdit}
//           setOpen={setOpenEdit}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           isTaskClosed={isTaskClosed}
//           projectId={projectId}
//         />
//       )}
//       {selectedSubtask && (
//         <DeleteSubtaskModal
//              onSubtaskDelete={() => {
//       dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
//     }}
//           open={openDelete}
//           setOpen={setOpenDelete}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           isTaskClosed={isTaskClosed}
//         />
//       )}
//     </section>
//   );
// };
// export default SubTaskList;
// "use client";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   CheckCircle2,
//   Edit,
//   Eye,
//   Plus,
//   Trash2,
//   ChevronLeft,
//   ChevronRight,
//   Lock,
//   ListTodo,
// } from "lucide-react";
// import CreateSubtaskModal from "@/modules/project-management/task/components/sub-task/CreateSubTaskModal";
// import EditSubtaskModal from "@/modules/project-management/task/components/sub-task/EditSubTaskModal";
// import DeleteSubtaskModal from "@/modules/project-management/task/components/sub-task/DeleteSubTaskModal";
// import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
// import { useRouter } from "next/navigation";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { fetchProjectById } from "@/modules/project-management/project/slices/projectSlice";
// import { cn } from "@/lib/utils";
// const SubTaskList = ({ task, taskId, projectId, isTaskClosed }) => {
//     const { project, status, successMessage } = useSelector(
//     (state) => state.project
//   );
//     const { currentUser, isTeamLead } = useCurrentUser(project?.data?.teamLeadId);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { subtasks, loading, error } = useSelector((state) => state.subTask);
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const subtasksPerPage = 5;
//   const safeSubtasks = Array.isArray(subtasks) ? subtasks : [];
//   const totalPages = Math.ceil(safeSubtasks.length / subtasksPerPage);
//   const indexOfLastSubtask = currentPage * subtasksPerPage;
//   const indexOfFirstSubtask = indexOfLastSubtask - subtasksPerPage;
//   const currentSubtasks = safeSubtasks.slice(
//     indexOfFirstSubtask,
//     indexOfLastSubtask
//   );
//   // Fetch subtasks on mount and when taskId changes
//   useEffect(() => {
//     if (taskId) {
//       dispatch(fetchSubTasksByTaskId(taskId));
//     }
//   }, [dispatch, subtasks?.length, taskId]);
//   useEffect(() => {
//           dispatch(fetchProjectById(projectId));
//   }, [dispatch]);
//   // Modal states
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openAdd, setOpenAdd] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedSubtask, setSelectedSubtask] = useState(null);
//   // Calculate progress
//   const completedSubtasks = safeSubtasks.filter(
//     (st) => st.status === "Completed"
//   ).length;
//   const progress =
//     safeSubtasks.length > 0
//       ? (completedSubtasks / safeSubtasks.length) * 100
//       : 0;
//   // Handlers
//   // const handleView = (subtask) => {
//   //   router.push(`/task/${taskId}/${subtask.subtask_id}`);
//   // };
//   const handleView = (subtask) => {
//     router.push(`/workspace/task/${taskId}/${subtask.subtask_id}`);
//   };
//   const handleEdit = (subtask) => {
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenEdit(true);
//   };
//   const handleDelete = (subtask) => {
//     if (isTaskClosed) return;
//     setSelectedSubtask(subtask);
//     setOpenDelete(true);
//     // Adjust page if deleting the last subtask on the current page
//     if (currentSubtasks.length === 1 && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };
//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };
//   const getStatusVariant = (status) => {
//     if (status === "Completed") return "success";
//     if (status === "In Progress") return "warning";
//     return "secondary"; // For Pending
//   };
//   return (
//     <section>
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-base sm:text-lg font-semibold flex items-center">
//           <ListTodo className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
//           Subtasks
//         </h3>
// {/* Single Add Button – handles ALL cases with proper UI feedback */}
// {isTeamLead && task?.status !== "Completed" && (
//   <Tooltip>
//     <TooltipTrigger asChild>
//       <div className="inline-block">
//         <Button
//           className={cn(
//             "bg-blue-600 text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9 transition-all",
//             task?.status === "Pending" 
//               ? "hover:bg-blue-600/80 cursor-not-allowed opacity-70" 
//               : "hover:bg-blue-700"
//           )}
//           onClick={() => task?.status === "In Progress" && setOpenAdd(true)}
//           disabled={task?.status !== "In Progress"}
//         >
//           <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Add
//         </Button>
//       </div>
//     </TooltipTrigger>
//     {/* Tooltip message changes based on task status */}
//     {task?.status === "Pending" && (
//       <TooltipContent className="text-xs">
//         Start the tasks to add subtasks
//       </TooltipContent>
//     )}
//   </Tooltip>
// )}
//       </div>
//       <div className="mb-3">
//         <div className="flex justify-between items-center mb-2">
//           <span className="font-medium text-xs sm:text-sm">
//             Progress: {progress.toFixed(0)}%
//           </span>
//           <Badge
//             variant={progress === 100 ? "success" : "default"}
//             className="text-xs sm:text-sm"
//           >
//             {completedSubtasks}/{safeSubtasks.length} Completed
//           </Badge>
//         </div>
//         <Progress value={progress} className="h-2 bg-gray-200" />
//       </div>
//       {loading && (
//         <div className="text-center text-sm text-gray-500">
//           Loading subtasks...
//         </div>
//       )}
//       {!loading && !error && safeSubtasks.length === 0 && (
//         <div className="text-center text-sm text-gray-500">
//           No subtasks available
//         </div>
//       )}
//       {!loading && !error && safeSubtasks.length > 0 && (
//         <ul className="space-y-2">
//           {currentSubtasks.map((st) => (
//             <li
//               key={st.subtask_id}
//               className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2 sm:p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
//             >
//               <div className="flex-1 flex items-center">
//                 <CheckCircle2
//                   className={`mr-2 h-3 w-3 sm:h-4 sm:w-4 ${
//                     st.status === "Completed"
//                       ? "text-green-500"
//                       : st.status === "In Progress"
//                       ? "text-yellow-500"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <span className="font-medium text-xs sm:text-sm">
//                   {st.title}
//                 </span>
//               </div>
//               <div className="flex items-center gap-1 sm:gap-2">
//                                            {st.isResolved === false && (
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <span
//                         className={cn(
//                           "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap cursor-default",
//                           "bg-red-100 text-red-700"
//                         )}
//                       >
//                         Bug Found
//                       </span>
//                     </TooltipTrigger>
//                     <TooltipContent className="text-xs px-2 py-1 rounded shadow-md bg-red-600 text-white">
//                       Bug is active. Resolve now!
//                     </TooltipContent>
//                   </Tooltip>
//                 )}
//                 <Badge
//                   variant={getStatusVariant(st.status)}
//                   className="text-xs sm:text-sm"
//                 >
//                   {st.status}
//                 </Badge>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleView(st)}
//                       className="h-7 w-7 sm:h-8 sm:w-8"
//                     >
//                       <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>View</TooltipContent>
//                 </Tooltip>
//               {/* Edit & Delete - Only show if Team Lead AND task is exactly "In Progress" */}
// {isTeamLead && task?.status === "In Progress" && (
//   <>
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => handleEdit(st)}
//       className="h-7 w-7 sm:h-8 sm:w-8"
//     >
//       <Edit className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
//     </Button>
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => handleDelete(st)}
//       className="h-7 w-7 sm:h-8 sm:w-8"
//     >
//       <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
//     </Button>
//   </>
// )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-3 mt-3">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//             className="h-8 w-8 sm:h-9 sm:w-9"
//           >
//             <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
//           </Button>
//           <span className="text-xs sm:text-sm font-medium">
//             Page {currentPage} of {totalPages}
//           </span>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="h-8 w-8 sm:h-9 sm:w-9"
//           >
//             <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
//           </Button>
//         </div>
//       )}
//       {/* Create, Edit, Delete Modals */}
//       <CreateSubtaskModal
//         open={openAdd}
//         setOpen={setOpenAdd}
//         taskDetails={task}
//         taskId={taskId}
//         projectId={projectId}
//       />
//       {selectedSubtask && (
//         <EditSubtaskModal
//         onSubtaskEdit={() => {
//       dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
//     }}
//           open={openEdit}
//           setOpen={setOpenEdit}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           isTaskClosed={isTaskClosed}
//           projectId={projectId}
//         />
//       )}
//       {selectedSubtask && (
//         <DeleteSubtaskModal
//              onSubtaskDelete={() => {
//       dispatch(fetchSubTasksByTaskId(taskId)); // optional if subtasks might change
//     }}
//           open={openDelete}
//           setOpen={setOpenDelete}
//           subtask={selectedSubtask}
//           taskId={taskId}
//           isTaskClosed={isTaskClosed}
//         />
//       )}
//     </section>
//   );
// };
// export default SubTaskList;
}}),
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
"[project]/src/modules/project-management/task/components/ViewTask.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import {
//   ChevronLeft,
//   Play,
//   CheckCircle,
//   RotateCcw,
//   Clock,
//   AlertCircle,
//   User,
//   Calendar,
//   Flag,
//   Tag,
//   FileText,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import SubTaskList from "@/modules/project-management/task/components/sub-task/SubTaskList";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchTaskById,
//   updateTaskStatus,
// } from "@/modules/project-management/task/slices/taskSlice";
// import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
// import { formatDateTimeIST } from "@/utils/formatDate";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { toast } from "sonner";
// const TaskView = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { id: task_id } = useParams();
//   const task = useSelector((state) => state.task.currentTask);
//   const { subtasks } = useSelector((state) => state.subTask);
//   const loading = useSelector((state) => state.task.status === "loading");
//   const updating = useSelector((state) => state.task.updating);
//   const { currentUser } = useCurrentUser();
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [delayDialog, setDelayDialog] = useState(false);
//   const [delayReason, setDelayReason] = useState("");
//   const [confirmCompleteOpen, setConfirmCompleteOpen] = useState(false);
//   const [initialLoading, setInitialLoading] = useState(true);
//   const [assigneeOpen, setAssigneeOpen] = useState(false);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const isTeamLead = task?.teamLeadId === currentUser?.id;
//   const canEdit = isTeamLead;
//   const allSubtasksDone = subtasks?.every((s) => s.status === "Completed") ?? true;
//   useEffect(() => {
//     const timer = setTimeout(() => setInitialLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     if (task_id) {
//       dispatch(fetchTaskById(task_id));
//       dispatch(fetchSubTasksByTaskId(task_id));
//     }
//   }, [task_id, dispatch]);
//   const handleStatusChange = async (newStatus) => {
//     if (updating || !canEdit) return;
//     if (newStatus === "Completed") {
//       setConfirmCompleteOpen(true);
//       return;
//     }
//     if (newStatus === "Pending") {
//       await dispatch(updateTaskStatus({ taskId: task_id, status: "Pending" }));
//       toast.success("Task reopened successfully");
//       dispatch(fetchTaskById(task_id));
//       return;
//     }
//     if (newStatus === "In Progress") {
//       await dispatch(updateTaskStatus({ taskId: task_id, status: "In Progress" }));
//       toast.success("Task is now In Progress");
//       dispatch(fetchTaskById(task_id));
//     }
//   };
//   const confirmComplete = async () => {
//     setConfirmCompleteOpen(false);
//     if (task.deadline && new Date() > new Date(task.deadline)) {
//       setDelayDialog(true);
//       return;
//     }
//     await dispatch(updateTaskStatus({ taskId: task_id, status: "Completed" }));
//     toast.success("Task marked as Completed");
//     dispatch(fetchTaskById(task_id));
//   };
//   const submitDelay = async () => {
//     if (!delayReason.trim()) return;
//     await dispatch(
//       updateTaskStatus({
//         taskId: task_id,
//         status: "Completed",
//         delayReason: delayReason.trim(),
//       })
//     );
//     toast.success("Task completed with delay reason");
//     setDelayDialog(false);
//     setDelayReason("");
//     dispatch(fetchTaskById(task_id));
//   };
//   const getInitials = (name = "") =>
//     name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
//   // SMART ACTION BUTTON — Shows exact next step
//   const getActionButton = () => {
//     if (!canEdit || !task?.status) return null;
//     if (task.status === "Pending") {
//       return {
//         text: "Start Task",
//         subtitle: "Move to In Progress",
//         color: "bg-blue-600 hover:bg-blue-700",
//         icon: Play,
//         next: "In Progress",
//       };
//     }
//     if (task.status === "In Progress") {
//       return {
//         text: "Mark Complete",
//         subtitle: "Finish this task",
//         color: allSubtasksDone ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-500",
//         icon: CheckCircle,
//         next: "Completed",
//         disabled: !allSubtasksDone,
//       };
//     }
//     if (task.status === "Completed") {
//       return {
//         text: "Reopen Task",
//         subtitle: "Back to Pending",
//         color: "bg-purple-600 hover:bg-purple-700",
//         icon: RotateCcw,
//         next: "Pending",
//       };
//     }
//     return null;
//   };
//   const actionBtn = getActionButton();
//   // Loading & Not Found
//   if (initialLoading || loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-teal-600 text-white py-8 px-6">
//           <div className="flex items-center gap-4">
//             <div className="h-10 w-28 bg-teal-700 rounded-lg animate-pulse" />
//             <div className="h-6 w-48 bg-teal-400 rounded animate-pulse" />
//           </div>
//         </div>
//         <Card className="shadow-xl border-0 min-h-screen">
//           <CardContent className="p-8 space-y-10 animate-pulse">
//             <div className="h-12 w-64 bg-gray-300 rounded-lg self-end" />
//             <div className="space-y-6">
//               <div className="h-8 w-96 bg-gray-200 rounded" />
//               <div className="space-y-3">
//                 <div className="h-5 w-32 bg-gray-300 rounded" />
//                 <div className="h-20 w-full bg-gray-200 rounded" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
//   if (!task) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Card className="text-center p-12 shadow-xl">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Task Not Found</h1>
//           <Button onClick={() => router.back()} className="bg-teal-600 hover:bg-teal-700">
//             Back
//           </Button>
//         </Card>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Clean Header */}
//       <div className="bg-teal-600 text-white py-8 px-6">
//         <div className="flex items-center gap-4">
//             <Button size="sm" onClick={() => router.back()} className="bg-teal-700 hover:bg-teal-800 rounded-lg">
//                       <ChevronLeft className="w-5 h-5 mr-1" /> Back
//                     </Button>
//           <p className="text-teal-100 text-sm">Task ID: {task.task_id}</p>
//         </div>
//       </div>
//       <Card className="shadow-xl border-0 min-h-screen">
//         <CardContent className="p-6 sm:p-8 space-y-5">
//           {/* Smart Action Button — Tells user exactly what’s next */}
//           {actionBtn && (
//             <div className="flex justify-end">
//               <div className="text-right">
//                 <Button
//                   onClick={() => handleStatusChange(actionBtn.next)}
//                   disabled={updating || actionBtn.disabled}
//                   className={`${actionBtn.color} text-white font-medium px-6 py-3`}
//                 >
//                   <actionBtn.icon className="w-5 h-5 mr-2" />
//                   {actionBtn.text}
//                 </Button>
//                 <p className="text-xs text-gray-500 mt-2">
//                   {actionBtn.subtitle}
//                   {actionBtn.disabled && " — Complete all subtasks first"}
//                 </p>
//               </div>
//             </div>
//           )}
//           {/* Task Title */}
//           <div>
//             <p className="text-sm  font-bold text-gray-900"> Title</p>
//             <h1 className="text-sm text-gray-900">{task.title}</h1>
//           </div>
//           {/* Description */}
//           {task.description && (
//             <div>
//               <p className="text-sm text-gray-900  font-bold">Description</p>
//               <div className="text-gray-700 leading-relaxed prose max-w-none">
//                 {task.description.length > 600 && !showFullDesc ? (
//                   <>
//                     <div dangerouslySetInnerHTML={{ __html: task.description.slice(0, 600).replace(/\n/g, "<br/>") + "..." }} />
//                     <button onClick={() => setShowFullDesc(true)} className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline">
//                       Show more <ChevronDown className="w-4 h-4 ml-1" />
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <div dangerouslySetInnerHTML={{ __html: task.description.replace(/\n/g, "<br/>") }} />
//                     {task.description.length > 600 && (
//                       <button onClick={() => setShowFullDesc(false)} className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline">
//                         Show less <ChevronUp className="w-4 h-4 ml-1" />
//                       </button>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           )}
//           {/* Info Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
//             {task.projectName && (
//               <div><p className="text-gray-900  font-bold">Project</p><p className="font-medium text-gray-800 mt-0.5">{task.projectName}</p></div>
//             )}
//             {task.priority && (
//               <div><p className="text-gray-900  font-bold">Priority</p>
//                 <span className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${
//                   task.priority === "High" ? "bg-red-600" : task.priority === "Medium" ? "bg-amber-500" : "bg-emerald-600"
//                 }`}>{task.priority}</span>
//               </div>
//             )}
//             <div>
//               <p className="text-gray-900  font-bold">Status</p>
//               <span className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${
//                 task.status === "Completed" ? "bg-gray-700" :
//                 task.status === "In Progress" ? "bg-blue-600" : "bg-orange-600"
//               }`}>
//                 {task.status}
//               </span>
//             </div>
//             <div>
//               <p className="text-gray-900  font-bold">Assigne</p>
//               <div className="flex -space-x-3 mt-1.5">
//                 {task.assignedTo?.length > 0 ? task.assignedTo.map((p) => (
//                   <Avatar key={p._id || p.memberId} className="w-10 h-10 ring-4 ring-white border-2 border-white cursor-pointer hover:z-10 transition-all" onClick={() => { setSelectedPerson(p); setAssigneeOpen(true); }}>
//                     <AvatarFallback className="bg-teal-600 text-white text-sm font-bold">
//                       {getInitials(p.memberName || p.name || "NA")}
//                     </AvatarFallback>
//                   </Avatar>
//                 )) : <span className="text-gray-500 text-sm mt-1">Unassigned</span>}
//               </div>
//             </div>
//             <div><p className="text-gray-900  font-bold">Created</p><p className="font-medium text-gray-800 mt-0.5">{formatDateTimeIST(task.createdAt)}</p></div>
//             {task.deadline && <div><p className="text-gray-900  font-bold">Deadline</p><p className="font-medium text-gray-800 mt-0.5">{formatDateTimeIST(task.deadline)}</p></div>}
//           </div>
//           {task.delayReason && (
//             <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
//               <p className="text-gray-900 flex items-center gap-2  font-bold">
//                 <AlertCircle className="w-5 h-5" /> Delay Reason
//               </p>
//               <p className="mt-2 text-amber-800 leading-relaxed">{task.delayReason}</p>
//             </div>
//           )}
//           <Separator className="my-10" />
//           {/* Subtasks */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">Subtasks</h3>
//             <SubTaskList
//               isTaskClosed={task.status === "Completed"}
//               task={task}
//               taskId={task.task_id}
//               projectId={task.projectId}
//             />
//           </div>
//         </CardContent>
//       </Card>
//       {/* Dialogs */}
//       <Dialog open={assigneeOpen} onOpenChange={setAssigneeOpen}>
//         <DialogContent>
//           <DialogHeader><DialogTitle>Team Member Details</DialogTitle></DialogHeader>
//           {selectedPerson && (
//             <div className="flex items-center gap-6 py-6">
//               <Avatar className="w-24 h-24"><AvatarFallback className="bg-teal-600 text-white text-3xl font-bold">{getInitials(selectedPerson.memberName || selectedPerson.name)}</AvatarFallback></Avatar>
//               <div>
//                 <p className="text-2xl font-bold">{selectedPerson.memberName || selectedPerson.name || "Unknown"}</p>
//                 <p className="text-gray-600 text-lg">{selectedPerson.role || "Team Member"}</p>
//                 <p className="text-sm text-gray-500 mt-2">ID: {selectedPerson.memberId || selectedPerson._id || "—"}</p>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//       <Dialog open={confirmCompleteOpen} onOpenChange={setConfirmCompleteOpen}>
//         <DialogContent>
//           <DialogHeader><DialogTitle>Mark Task as Complete?</DialogTitle></DialogHeader>
//           <p className="text-gray-600 text-lg">Are you sure all work is finished and this task should be marked as <strong>Completed</strong>?</p>
//           <DialogFooter className="mt-6">
//             <Button variant="outline" onClick={() => setConfirmCompleteOpen(false)}>Cancel</Button>
//             <Button onClick={confirmComplete} className="bg-teal-600 hover:bg-teal-700">Yes, Mark Complete</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//       <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
//         <DialogContent>
//           <DialogHeader><DialogTitle className="text-red-600">Deadline Missed</DialogTitle></DialogHeader>
//           <div className="py-4">
//             <label className="text-sm font-medium block mb-2">Reason for delay (required)</label>
//             <textarea value={delayReason} onChange={(e) => setDelayReason(e.target.value)}
//               className="w-full p-4 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500"
//               placeholder="Please explain why this task was completed after the deadline..." />
//           </div>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDelayDialog(false)}>Cancel</Button>
//             <Button onClick={submitDelay} disabled={!delayReason.trim()} className="bg-teal-600 hover:bg-teal-700">
//               Complete with Reason
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };
// export default TaskView;
// "use client";
// import { useEffect, useState, useMemo } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   ChevronLeft,
//   Play,
//   CheckCircle,
//   RotateCcw,
//   Clock,
//   AlertCircle,
//   User,
//   Calendar,
//   Flag,
//   Tag,
//   FileText,
//   AlignLeft,
//   AlertTriangle,
//   ChevronDown,
//   ChevronUp,
//   Edit,
// } from "lucide-react";
// import SubTaskList from "@/modules/project-management/task/components/sub-task/SubTaskList";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchTaskById,
//   updateTaskStatus,
// } from "@/modules/project-management/task/slices/taskSlice";
// import { fetchSubTasksByTaskId } from "@/modules/project-management/task/slices/subTaskSlice";
// import { formatDateTimeIST } from "@/utils/formatDate";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { toast } from "sonner";
// const TaskView = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { id: task_id } = useParams();
//   const task = useSelector((state) => state.task.currentTask);
//   const { subtasks } = useSelector((state) => state.subTask);
//   const loading = useSelector((state) => state.task.status === "loading");
//   const updating = useSelector((state) => state.task.updating);
//   const { currentUser } = useCurrentUser();
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [delayDialog, setDelayDialog] = useState(false);
//   const [delayReason, setDelayReason] = useState("");
//   const [confirmCompleteOpen, setConfirmCompleteOpen] = useState(false);
//   const [initialLoading, setInitialLoading] = useState(true);
//   const [assigneeOpen, setAssigneeOpen] = useState(false);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [activeTab, setActiveTab] = useState("subtasks"); // New: Tabs
//   const isTeamLead = task?.teamLeadId === currentUser?.id;
//   const canEdit = isTeamLead;
//   const allSubtasksDone = subtasks?.every((s) => s.status === "Completed") ?? true;
//   useEffect(() => {
//     const timer = setTimeout(() => setInitialLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     if (task_id) {
//       dispatch(fetchTaskById(task_id));
//       dispatch(fetchSubTasksByTaskId(task_id));
//     }
//   }, [task_id, dispatch]);
//   const getInitials = (name = "") =>
//     name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
//   const assignees = useMemo(() => {
//     if (!task?.assignedTo) return [];
//     return Array.isArray(task.assignedTo) ? task.assignedTo : [task.assignedTo];
//   }, [task?.assignedTo]);
//   // Smart Action Button
//   const getActionButton = () => {
//     if (!canEdit || !task?.status) return null;
//     if (task.status === "Pending")
//       return { text: "Start Task", color: "bg-blue-600", icon: Play, next: "In Progress" };
//     if (task.status === "In Progress")
//       return {
//         text: "Mark Complete",
//         color: allSubtasksDone ? "bg-teal-600" : "bg-gray-500",
//         icon: CheckCircle,
//         next: "Completed",
//         disabled: !allSubtasksDone,
//       };
//     if (task.status === "Completed")
//       return { text: "Reopen Task", color: "bg-purple-600", icon: RotateCcw, next: "Pending" };
//     return null;
//   };
//   const actionBtn = getActionButton();
//   const handleStatusChange = async (newStatus) => {
//     if (updating || !canEdit) return;
//     if (newStatus === "Completed") {
//       setConfirmCompleteOpen(true);
//       return;
//     }
//     await dispatch(updateTaskStatus({ taskId: task_id, status: newStatus })).unwrap();
//     toast.success(`Task is now ${newStatus}`);
//     dispatch(fetchTaskById(task_id));
//   };
//   const confirmComplete = async () => {
//     setConfirmCompleteOpen(false);
//     if (task.deadline && new Date() > new Date(task.deadline)) {
//       setDelayDialog(true);
//       return;
//     }
//     await dispatch(updateTaskStatus({ taskId: task_id, status: "Completed" })).unwrap();
//     toast.success("Task marked as Completed");
//     dispatch(fetchTaskById(task_id));
//   };
//   const submitDelay = async () => {
//     if (!delayReason.trim()) {
//       toast.error("Please provide a reason");
//       return;
//     }
//     await dispatch(
//       updateTaskStatus({
//         taskId: task_id,
//         status: "Completed",
//         delayReason: delayReason.trim(),
//       })
//     ).unwrap();
//     toast.success("Task completed with delay reason");
//     setDelayDialog(false);
//     setDelayReason("");
//     dispatch(fetchTaskById(task_id));
//   };
//   // Activity Log from task + subtasks (you can enhance this later)
//   const activityLog = useMemo(() => {
//     const logs = [];
//     if (task?.actionedBy) {
//       logs.push(...task.actionedBy.map((a) => ({ ...a, type: "task" })));
//     }
//     subtasks?.forEach((st) => {
//       if (st.actionedBy) {
//         logs.push(...st.actionedBy.map((a) => ({ ...a, subtaskTitle: st.title, type: "subtask" })));
//       }
//     });
//     return logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
//   }, [task?.actionedBy, subtasks]);
//   if (initialLoading || loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="bg-teal-600 text-white py-8 px-6">
//           <div className="flex items-center gap-4">
//             <div className="h-9 w-24 bg-teal-700 rounded-lg animate-pulse" />
//             <div className="h-8 w-64 bg-teal-500 rounded animate-pulse" />
//           </div>
//         </div>
//         <Card className="min-h-screen mx-auto mt-8 shadow-xl border-0">
//           <CardContent className="p-8 space-y-10 animate-pulse">
//             <div className="h-10 w-40 bg-gray-300 rounded-lg" />
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="space-y-2">
//                   <div className="h-4 w-24 bg-gray-300 rounded" />
//                   <div className="h-6 w-32 bg-gray-200 rounded" />
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
//   if (!task) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Card className="text-center p-12 shadow-xl">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Task Not Found</h1>
//           <Button onClick={() => router.back()} className="bg-teal-600 hover:bg-teal-700">
//             <ChevronLeft className="mr-2" /> Go Back
//           </Button>
//         </Card>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-teal-600 text-white py-6 px-6">
//         <Button
//           size="sm"
//           onClick={() => router.back()}
//           className="bg-teal-700 hover:bg-teal-800 rounded-lg"
//         >
//           <ChevronLeft className="w-5 h-5 mr-1" /> Back
//         </Button>
//       </div>
//       <Card className="shadow-xl border-0 min-h-screen">
//         <CardContent className="p-6 sm:p-8 space-y-8">
//           {/* Action Buttons */}
//           <div className="flex flex-wrap justify-end gap-3">
//             {actionBtn && (
//               <Button
//                 onClick={() => handleStatusChange(actionBtn.next)}
//                 disabled={updating || actionBtn.disabled}
//                 className={`${actionBtn.color} text-white`}
//               >
//                 <actionBtn.icon className="w-4 h-4 mr-2" />
//                 {actionBtn.text}
//               </Button>
//             )}
//           </div>
//           <div className="space-y-10">
//   {/* Title */}
//             {task.title && (
//               <div>
//                 <div className="flex items-center gap-2 mb-1">
//                   <FileText className="w-4 h-4 text-gray-600" />
//                   <p className="text-sm font-medium text-gray-600">Title</p>
//                 </div>
//                 <h1 className="text-sm font-semibold text-gray-600">
//                   {task.title}
//                 </h1>
//               </div>
//             )}
//             {/* Description */}
//             {task.description && (
//               <div>
//                 <div className="flex items-center gap-2 mb-1">
//                   <AlignLeft className="w-4 h-4 text-gray-600" />
//                   <p className="text-sm font-semibold text-gray-600">
//                     Description
//                   </p>
//                 </div>
//                 <div className="text-sm font-semibold text-gray-600 leading-relaxed prose max-w-none mt-1">
//                   {task.description.length > 600 && !showFullDesc ? (
//                     <>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html:
//                             task.description
//                               .slice(0, 600)
//                               .replace(/\n/g, "<br/>") + "...",
//                         }}
//                       />
//                       <button
//                         onClick={() => setShowFullDesc(true)}
//                         className="text-teal-600 text-sm font-semibold mt-3 flex items-center hover:underline"
//                       >
//                         Show more <ChevronDown className="w-4 h-4 ml-1" />
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <div
//                         dangerouslySetInnerHTML={{
//                           __html: task.description.replace(/\n/g, "<br/>"),
//                         }}
//                       />
//                       {task.description.length > 600 && showFullDesc && (
//                         <button
//                           onClick={() => setShowFullDesc(false)}
//                           className="text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline"
//                         >
//                           Show less <ChevronUp className="w-4 h-4 ml-1" />
//                         </button>
//                       )}
//                     </>
//                   )}
//                 </div>
//               </div>
//             )}
//             {/* Info Section */}
//             <div className="space-y-5">
//               {task.projectName && (
//                 <div className="flex items-center gap-3">
//                   <Flag className="w-4 h-4 text-gray-600" />
//                   <p className="text-sm text-gray-600 font-medium w-32">Project</p>
//                   <p className="font-medium text-gray-900">{task.projectName}</p>
//                 </div>
//               )}
//               {task.priority && (
//                 <div className="flex items-center gap-3">
//                   <AlertTriangle className="w-4 h-4 text-gray-600" />
//                   <p className="text-sm text-gray-600 font-medium w-32">Priority</p>
//                   <span
//                     className={`text-xs px-2 py-1 rounded font-medium text-white ${
//                       task.priority === "High"
//                         ? "bg-red-600"
//                         : task.priority === "Medium"
//                         ? "bg-amber-500"
//                         : "bg-emerald-600"
//                     }`}
//                   >
//                     {task.priority}
//                   </span>
//                 </div>
//               )}
//               <div className="flex items-center gap-3">
//                 <Tag className="w-4 h-4 text-gray-600" />
//                 <p className="text-sm text-gray-600 font-medium w-32">Status</p>
//                 <span
//                   className={`text-xs px-2 py-1 rounded font-medium text-white ${
//                     task.status === "Completed"
//                       ? "bg-gray-700"
//                       : task.status === "In Progress"
//                       ? "bg-blue-600"
//                       : "bg-orange-600"
//                   }`}
//                 >
//                   {task.status === "Completed" ? "Complete" : task.status}
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <User className="w-4 h-4 text-gray-600" />
//                 <p className="text-sm text-gray-600 font-medium w-32">Assigned to</p>
//                 <div className="flex -space-x-3">
//                   {assignees.length > 0 ? (
//                     assignees.map((person, i) => (
//                       <Avatar
//                         key={i}
//                         className="w-10 h-10 ring-4 ring-white border-2 border-white cursor-pointer hover:z-10 transition-all transform hover:scale-110"
//                         onClick={() => {
//                           setSelectedPerson(person);
//                           setAssigneeOpen(true);
//                         }}
//                       >
//                         <AvatarImage src={person.avatar} />
//                         <AvatarFallback className="bg-teal-600 text-white text-sm font-bold">
//                           {getInitials(person.memberName || person.name || "NA")}
//                         </AvatarFallback>
//                       </Avatar>
//                     ))
//                   ) : (
//                     <span className="text-gray-500 text-sm">Unassigned</span>
//                   )}
//                 </div>
//               </div>
//               {task.deadline && (
//                 <div className="flex items-center gap-3">
//                   <Calendar className="w-4 h-4 text-gray-600" />
//                   <p className="text-sm text-gray-600 font-medium w-32">Deadline</p>
//                   <p className="text-sm text-gray-900 font-medium">
//                     {formatDateTimeIST(task.deadline)}
//                   </p>
//                 </div>
//               )}
//               <div className="flex items-center gap-3">
//                 <Clock className="w-4 h-4 text-gray-600" />
//                 <p className="text-sm text-gray-600 font-medium w-32">Created At</p>
//                 <p className="text-sm text-gray-900 font-medium">
//                   {formatDateTimeIST(task.createdAt)}
//                 </p>
//               </div>
//               {task.delayReason && (
//                 <div className="flex items-center gap-3">
//                   <AlertCircle className="w-4 h-4 text-gray-600" />
//                   <p className="text-sm text-gray-600 font-medium w-32">Delay Reason</p>
//                   <p className="text-sm text-gray-900 font-medium max-w-lg">{task.delayReason}</p>
//                 </div>
//               )}
//                  {task.task_id && (
//                 <div className="flex items-center gap-3 cursor-pointer">
//                   <Edit className="w-4 h-4 text-gray-600" />
//                   <p className="text-sm text-gray-600 font-medium w-32">
//                     Task Id
//                   </p>
//                   <p className="text-sm font-medium text-green-900 hover:underline">
//                     #{task.task_id}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//           {/* Tabs: Subtasks & Activity */}
//           <div>
//             <div className="flex border-b border-gray-200 mb-6">
//               <button
//                 onClick={() => setActiveTab("subtasks")}
//                 className={`px-6 py-3 text-sm font-semibold transition-all relative ${
//                   activeTab === "subtasks"
//                     ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Subtasks ({subtasks?.length || 0})
//               </button>
//               <button
//                 onClick={() => setActiveTab("activity")}
//                 className={`px-6 py-3 text-sm font-semibold transition-all relative ${
//                   activeTab === "activity"
//                     ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 Activity
//               </button>
//             </div>
//             <div className="py-4">
//               {activeTab === "subtasks" && (
//                 <SubTaskList
//                   isTaskClosed={task.status === "Completed"}
//                   task={task}
//                   taskId={task.task_id}
//                   projectId={task.projectId}
//                 />
//               )}
//               {activeTab === "activity" && (
//                 <div className="space-y-4">
//                   {activityLog.length > 0 ? (
//                     activityLog.map((act, i) => (
//                       <div key={i} className="flex gap-4">
//                         <Avatar className="w-10 h-10 ring-2 ring-white flex-shrink-0">
//                           <AvatarFallback className="bg-teal-600 text-white text-sm font-medium">
//                             {getInitials(act.performedBy || "User")}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="flex-1 text-sm">
//                           <p className="text-gray-900">
//                             <span className="font-medium">
//                               {act.performedBy || "User"}
//                             </span>{" "}
//                             - {act.note}
//                           </p>
//                           <p className="text-xs text-gray-500 mt-1">
//                             {formatDateTimeIST(act.timestamp)}
//                           </p>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-center text-gray-500 py-12">No activity recorded yet.</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//       {/* Dialogs */}
//       <Dialog open={assigneeOpen} onOpenChange={setAssigneeOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Team Member</DialogTitle>
//           </DialogHeader>
//           {selectedPerson && (
//             <div className="flex items-center gap-6 py-4">
//               <Avatar className="w-24 h-24">
//                 <AvatarImage src={selectedPerson.avatar} />
//                 <AvatarFallback className="bg-teal-600 text-white text-3xl font-bold">
//                   {getInitials(selectedPerson.memberName || selectedPerson.name || "NA")}
//                 </AvatarFallback>
//               </Avatar>
//               <div className="space-y-3">
//                 <p className="text-2xl font-bold text-gray-900">
//                   {selectedPerson.memberName || selectedPerson.name || "Unknown"}
//                 </p>
//                 <p className="text-lg text-gray-600">
//                   {selectedPerson.role || selectedPerson.position || "Team Member"}
//                 </p>
//                 {selectedPerson.email && (
//                   <p className="text-sm text-gray-500">{selectedPerson.email}</p>
//                 )}
//                 <p className="text-xs text-gray-500 mt-4">
//                  Memeber ID: {selectedPerson.memberId }
//                 </p>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//       <Dialog open={confirmCompleteOpen} onOpenChange={setConfirmCompleteOpen}>
//         <DialogContent>
//           <DialogHeader><DialogTitle>Complete Task?</DialogTitle></DialogHeader>
//           <p className="text-gray-600">Are you sure this task is fully done?</p>
//           <DialogFooter className="mt-6">
//             <Button variant="outline" onClick={() => setConfirmCompleteOpen(false)}>Cancel</Button>
//             <Button onClick={confirmComplete} className="bg-teal-600 hover:bg-teal-700">Yes, Complete</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//       <Dialog open={delayDialog} onOpenChange={setDelayDialog}>
//         <DialogContent>
//           <DialogHeader><DialogTitle className="text-red-600">Deadline Missed</DialogTitle></DialogHeader>
//           <div className="py-4">
//             <label className="text-sm font-medium block mb-2">Reason for delay (required)</label>
//             <textarea
//               value={delayReason}
//               onChange={(e) => setDelayReason(e.target.value)}
//               className="w-full p-3 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500"
//               placeholder="Explain why this was completed after the deadline..."
//             />
//           </div>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDelayDialog(false)}>Cancel</Button>
//             <Button onClick={submitDelay} disabled={!delayReason.trim()} className="bg-teal-600 hover:bg-teal-700">
//               Complete with Reason
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };
// export default TaskView;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-ssr] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/align-left.js [app-ssr] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$sub$2d$task$2f$SubTaskList$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/components/sub-task/SubTaskList.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/slices/taskSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$subTaskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project-management/task/slices/subTaskSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
const TaskView = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id: task_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const task = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.task.currentTask);
    const { subtasks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.subTask);
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.task.status === "loading");
    const updating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.task.updating);
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentUser"])();
    const [showFullDesc, setShowFullDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [delayDialog, setDelayDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [delayReason, setDelayReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmCompleteOpen, setConfirmCompleteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialLoading, setInitialLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [assigneeOpen, setAssigneeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPerson, setSelectedPerson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("subtasks");
    const isTeamLead = task?.teamLeadId === currentUser?.id;
    const canEdit = isTeamLead;
    const allSubtasksDone = subtasks?.every((s)=>s.status === "Completed") ?? true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setInitialLoading(false), 1500);
        return ()=>clearTimeout(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (task_id) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTaskById"])(task_id));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$subTaskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSubTasksByTaskId"])(task_id));
        }
    }, [
        task_id,
        dispatch
    ]);
    const getInitials = (name = "")=>name.split(" ").map((n)=>n[0]).join("").slice(0, 2).toUpperCase();
    const assignees = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!task?.assignedTo) return [];
        return Array.isArray(task.assignedTo) ? task.assignedTo : [
            task.assignedTo
        ];
    }, [
        task?.assignedTo
    ]);
    // Smart Action Button
    const getActionButton = ()=>{
        if (!canEdit || !task?.status) return null;
        if (task.status === "Pending") return {
            text: "Start Task",
            color: "bg-blue-600",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"],
            next: "In Progress"
        };
        if (task.status === "In Progress") return {
            text: "Mark Complete",
            color: allSubtasksDone ? "bg-teal-600" : "bg-gray-500",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            next: "Completed",
            disabled: !allSubtasksDone
        };
        if (task.status === "Completed") return {
            text: "Reopen Task",
            color: "bg-purple-600",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
            next: "Pending"
        };
        return null;
    };
    const actionBtn = getActionButton();
    // Helper function to create actionedBy object (same as subtask)
    const createActionedBy = (note)=>({
            note,
            performedBy: currentUser?.name || currentUser?.email || "User",
            timestamp: new Date().toISOString()
        });
    const handleStatusChange = async (newStatus)=>{
        if (updating || !canEdit) return;
        // Create proper actionedBy object (same format as subtask)
        const actionedBy = createActionedBy(newStatus === "Pending" ? "Reopened task" : `Changed status to ${newStatus}`);
        if (newStatus === "Completed") {
            setConfirmCompleteOpen(true);
            return;
        }
        try {
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateTaskStatus"])({
                taskId: task_id,
                status: newStatus,
                actionedBy
            })).unwrap();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Task is now ${newStatus}`);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTaskById"])(task_id));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to update status");
        }
    };
    const confirmComplete = async ()=>{
        setConfirmCompleteOpen(false);
        if (task.deadline && new Date() > new Date(task.deadline)) {
            setDelayDialog(true);
            return;
        }
        // Create proper actionedBy object
        const actionedBy = createActionedBy("Task marked as Completed");
        try {
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateTaskStatus"])({
                taskId: task_id,
                status: "Completed",
                actionedBy
            })).unwrap();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Task marked as Completed");
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTaskById"])(task_id));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to complete task");
        }
    };
    const submitDelay = async ()=>{
        if (!delayReason.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please provide a reason");
            return;
        }
        // Create proper actionedBy object
        const actionedBy = createActionedBy("Task Completed with delay");
        try {
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateTaskStatus"])({
                taskId: task_id,
                status: "Completed",
                delayReason: delayReason.trim(),
                actionedBy
            })).unwrap();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Task completed with delay reason");
            setDelayDialog(false);
            setDelayReason("");
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$slices$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTaskById"])(task_id));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to save delay reason");
        }
    };
    // Activity Log from task + subtasks
    const activityLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const logs = [];
        if (task?.actionedBy) {
            logs.push(...task.actionedBy.map((a)=>({
                    ...a,
                    type: "task"
                })));
        }
        subtasks?.forEach((st)=>{
            if (st.actionedBy) {
                logs.push(...st.actionedBy.map((a)=>({
                        ...a,
                        subtaskTitle: st.title,
                        type: "subtask"
                    })));
            }
        });
        return logs.sort((a, b)=>new Date(b.timestamp) - new Date(a.timestamp));
    }, [
        task?.actionedBy,
        subtasks
    ]);
    if (initialLoading || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-teal-600 text-white py-8 px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 w-24 bg-teal-700 rounded-lg animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 w-64 bg-teal-500 rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                        lineNumber: 1193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                    lineNumber: 1192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "min-h-screen mx-auto mt-8 shadow-xl border-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-8 space-y-10 animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-40 bg-gray-300 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-24 bg-gray-300 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                lineNumber: 1204,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-32 bg-gray-200 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                lineNumber: 1205,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                        lineNumber: 1203,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                        lineNumber: 1199,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                    lineNumber: 1198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
            lineNumber: 1191,
            columnNumber: 7
        }, this);
    }
    if (!task) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "text-center p-12 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-800 mb-4",
                        children: "Task Not Found"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                        lineNumber: 1219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.back(),
                        className: "bg-teal-600 hover:bg-teal-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1221,
                                columnNumber: 13
                            }, this),
                            " Go Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                        lineNumber: 1220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                lineNumber: 1218,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
            lineNumber: 1217,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-teal-600 text-white py-6 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    onClick: ()=>router.back(),
                    className: "bg-teal-700 hover:bg-teal-800 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-5 h-5 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1237,
                            columnNumber: 11
                        }, this),
                        " Back"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                    lineNumber: 1232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                lineNumber: 1231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-xl border-0 min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6 sm:p-8 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-end gap-3",
                            children: actionBtn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>handleStatusChange(actionBtn.next),
                                disabled: updating || actionBtn.disabled,
                                className: `${actionBtn.color} text-white`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(actionBtn.icon, {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                        lineNumber: 1252,
                                        columnNumber: 17
                                    }, this),
                                    actionBtn.text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1247,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-10",
                            children: [
                                task.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1264,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-gray-600",
                                                    children: "Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: task.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1262,
                                    columnNumber: 15
                                }, this),
                                task.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$align$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-600",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1276,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-700 leading-relaxed prose max-w-none mt-1",
                                            children: task.description.length > 600 && !showFullDesc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: task.description.slice(0, 600).replace(/\n/g, "<br/>") + "..."
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowFullDesc(true),
                                                        className: "text-teal-600 text-sm font-semibold mt-3 flex items-center hover:underline",
                                                        children: [
                                                            "Show more ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "w-4 h-4 ml-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: task.description.replace(/\n/g, "<br/>")
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                        lineNumber: 1295,
                                                        columnNumber: 23
                                                    }, this),
                                                    task.description.length > 600 && showFullDesc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowFullDesc(false),
                                                        className: "text-teal-600 text-sm font-medium mt-3 flex items-center hover:underline",
                                                        children: [
                                                            "Show less ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                className: "w-4 h-4 ml-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                lineNumber: 1305,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                        lineNumber: 1301,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1278,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5",
                                    children: [
                                        task.projectName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1318,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1319,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-900",
                                                    children: task.projectName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1320,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1317,
                                            columnNumber: 17
                                        }, this),
                                        task.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Priority"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1327,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2 py-1 rounded font-medium text-white ${task.priority === "High" ? "bg-red-600" : task.priority === "Medium" ? "bg-amber-500" : "bg-emerald-600"}`,
                                                    children: task.priority
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1343,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1344,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2 py-1 rounded font-medium text-white ${task.status === "Completed" ? "bg-gray-700" : task.status === "In Progress" ? "bg-blue-600" : "bg-orange-600"}`,
                                                    children: task.status === "Completed" ? "Complete" : task.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1345,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1342,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1359,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Assigned to"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1360,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex -space-x-3",
                                                    children: assignees.length > 0 ? assignees.map((person, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            className: "w-10 h-10 ring-4 ring-white border-2 border-white cursor-pointer hover:z-10 transition-all transform hover:scale-110",
                                                            onClick: ()=>{
                                                                setSelectedPerson(person);
                                                                setAssigneeOpen(true);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                    src: person.avatar
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                    lineNumber: 1372,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                    className: "bg-teal-600 text-white text-sm font-bold",
                                                                    children: getInitials(person.memberName || person.name || "NA")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                    lineNumber: 1373,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                            lineNumber: 1364,
                                                            columnNumber: 23
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500 text-sm",
                                                        children: "Unassigned"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                        lineNumber: 1379,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1361,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1358,
                                            columnNumber: 15
                                        }, this),
                                        task.deadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1386,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Deadline"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1387,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 font-medium",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTimeIST"])(task.deadline)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1388,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1395,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Created At"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1396,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 font-medium",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTimeIST"])(task.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1397,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1394,
                                            columnNumber: 15
                                        }, this),
                                        task.delayReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1404,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Delay Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 font-medium max-w-lg",
                                                    children: task.delayReason
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1406,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1403,
                                            columnNumber: 17
                                        }, this),
                                        task.task_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                    className: "w-4 h-4 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1412,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 font-medium w-32",
                                                    children: "Task Id"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1413,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-green-900 hover:underline",
                                                    children: [
                                                        "#",
                                                        task.task_id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1315,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-gray-200 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("subtasks"),
                                            className: `px-6 py-3 text-sm font-semibold transition-all relative ${activeTab === "subtasks" ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600" : "text-gray-600 hover:text-gray-900"}`,
                                            children: [
                                                "Subtasks (",
                                                subtasks?.length || 0,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("activity"),
                                            className: `px-6 py-3 text-sm font-semibold transition-all relative ${activeTab === "activity" ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-600" : "text-gray-600 hover:text-gray-900"}`,
                                            children: "Activity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1435,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-4",
                                    children: [
                                        activeTab === "subtasks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2d$management$2f$task$2f$components$2f$sub$2d$task$2f$SubTaskList$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            isTaskClosed: task.status === "Completed",
                                            task: task,
                                            taskId: task.task_id,
                                            projectId: task.projectId
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1449,
                                            columnNumber: 17
                                        }, this),
                                        activeTab === "activity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: activityLog.length > 0 ? activityLog.map((act, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            className: "w-10 h-10 ring-2 ring-white flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                className: "bg-teal-600 text-white text-sm font-medium",
                                                                children: getInitials(act.performedBy || "User")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                lineNumber: 1463,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                            lineNumber: 1462,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-900",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: act.performedBy || "User"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                            lineNumber: 1469,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " ",
                                                                        act.subtaskTitle ? `on subtask "${act.subtaskTitle}"` : "",
                                                                        " - ",
                                                                        act.note
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                    lineNumber: 1468,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 mt-1",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTimeIST"])(act.timestamp)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                                    lineNumber: 1474,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                            lineNumber: 1467,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                    lineNumber: 1461,
                                                    columnNumber: 23
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-gray-500 py-12",
                                                children: "No activity recorded yet."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                                lineNumber: 1481,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1458,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1447,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1423,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                    lineNumber: 1242,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: assigneeOpen,
                onOpenChange: setAssigneeOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Team Member"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1494,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1493,
                            columnNumber: 11
                        }, this),
                        selectedPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "w-24 h-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: selectedPerson.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1499,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "bg-teal-600 text-white text-3xl font-bold",
                                            children: getInitials(selectedPerson.memberName || selectedPerson.name || "NA")
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1500,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1498,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: selectedPerson.memberName || selectedPerson.name || "Unknown"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1505,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-gray-600",
                                            children: selectedPerson.role || selectedPerson.position || "Team Member"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1508,
                                            columnNumber: 17
                                        }, this),
                                        selectedPerson.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500",
                                            children: selectedPerson.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1512,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-4",
                                            children: [
                                                "Member ID: ",
                                                selectedPerson.memberId || selectedPerson._id || "—"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                            lineNumber: 1514,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1504,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1497,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                    lineNumber: 1492,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                lineNumber: 1491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: confirmCompleteOpen,
                onOpenChange: setConfirmCompleteOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Complete Task?"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1525,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1525,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Are you sure this task is fully done?"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1526,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setConfirmCompleteOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1528,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: confirmComplete,
                                    className: "bg-teal-600 hover:bg-teal-700",
                                    children: "Yes, Complete"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1529,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1527,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                    lineNumber: 1524,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                lineNumber: 1523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: delayDialog,
                onOpenChange: setDelayDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-red-600",
                                children: "Deadline Missed"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                lineNumber: 1536,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1536,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium block mb-2",
                                    children: "Reason for delay (required)"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1538,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: delayReason,
                                    onChange: (e)=>setDelayReason(e.target.value),
                                    className: "w-full p-3 border rounded-lg min-h-32 resize-none focus:ring-2 focus:ring-teal-500",
                                    placeholder: "Explain why this was completed after the deadline..."
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1539,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1537,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setDelayDialog(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1547,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: submitDelay,
                                    disabled: !delayReason.trim() || updating,
                                    className: "bg-teal-600 hover:bg-teal-700",
                                    children: "Complete with Reason"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                                    lineNumber: 1548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                            lineNumber: 1546,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                    lineNumber: 1535,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
                lineNumber: 1534,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project-management/task/components/ViewTask.jsx",
        lineNumber: 1229,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TaskView;
}}),

};

//# sourceMappingURL=src_5669b702._.js.map