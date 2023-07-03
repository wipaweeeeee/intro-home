import styles from './styles.module.scss';
import AnimateDiv from '../AnimateDiv';

const QuoteHalf = ({ contentLeft, contentRight, titleLeft, titleRight }) => {
	return (
		<div className={styles.quoteHalfContainer}>	
			<div className={styles.left}>
				<AnimateDiv style={{maxWidth: '80%'}}>
					{
						titleLeft && <div className={styles.title}>{ titleLeft }<br /></div>
					}
					<div>{ contentLeft }</div>
				</AnimateDiv>
			</div>
			<div className={styles.right}>
				<AnimateDiv style={{maxWidth: '80%'}}>
					{
						titleRight && <div className={styles.title}>{ titleRight }<br /></div>
					}
					<div>{ contentRight }</div>
				</AnimateDiv>
			</div>
		</div>
	)
}

export default QuoteHalf;