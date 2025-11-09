"use client";
import styles from "./AfterArticle.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import ShareButtons from "@/app/ui/components/blog/ShareButtons";

function AfterArticle({ title, excerpt }) {
    return (
        <div className={styles.afterArticle}>
            <div className="content-container">
                <Link href="/thoughts">Back to index</Link>
				<ShareButtons title={title} excerpt={excerpt} />
            </div>
        </div>
    );
}

export default AfterArticle;
