'use client';

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./Profile.module.scss";

function Profile(){
	return(
		<div className={styles.profile}>
			<motion.div className={styles["profile__inner"]}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
			transition={{
				duration: .01,
				delay: .3,
				type: "spring",
				stiffness: 200,
				damping: 30
			}}>
				<Image width="200" height="200" src="images/profile.webp" alt="Profile image" />
			</motion.div>
		</div>
	)
}

export default Profile;
