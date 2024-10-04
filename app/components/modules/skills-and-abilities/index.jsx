import styles from './style.module.scss';
import SectionHead from "../../components/section-head";
import VennDiagram from '../../components/venn-diagram';
import SkillsList from './skills-list';

function SkillsAndAbilities(){

    return(
        <section className={styles.skills_abilities}>
			<div className="container mb">
				<div className="inner-2col">
					<div className="col-1">
						<SectionHead titleString="Skills and expertise" separator/>
					</div>
					<div className="col-2">
						<SkillsList />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<div className={styles.diagram}>
							<VennDiagram />
						</div>
					</div>
					<div className="col-2">
						<div className={styles.body_text}>
							<p>
								From the baseline of accessibility I seek to bring understated creative flair, using typography, hierarchy, animation and colour. I’m experienced at working with clients to help unlock that missing piece, that elusive “pop” that their website needs.
							</p>
							<p>
								I’m a design minimalist, I believe small changes make big differences. I take a pragmatic approach and I’m sympathetic to client and user needs.
							</p>
							<p className="inset-text">
								I call myself a design engineer because I like to occupy the intersection of visual design and web development. I find the two disciplines equally captivating.
							</p>
						</div>
					</div>
				</div>
			</div>
        </section>
    )

}

export default SkillsAndAbilities;