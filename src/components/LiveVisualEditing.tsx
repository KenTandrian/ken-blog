"use client"

import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "next-sanity";
import { useEffect } from "react";

import { client } from "@/sanity/lib/client";

// Always enable Stega in Live Mode
const stegaClient = client.withConfig({ stega: true });

export default function LiveVisualEditing() {
    useLiveMode({ client: stegaClient });
    useEffect(() => {
        // If not an Iframe or a Vercel Preview deployment, turn off Draft Mode
        if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview" && window === parent) {
            location.href = "/api/disable-draft"
        }
    }, []);

    return <VisualEditing />;
}
