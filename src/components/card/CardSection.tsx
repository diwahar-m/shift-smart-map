import { InfoIcon } from '../../assets'
import AppBox from '../mui/AppBox'
import AppImage from '../mui/AppImage'
import AppHStack from '../mui/AppStack/AppHStack'
import AppText from '../mui/AppText'
import AuditTrendText from './AuditTrendText'
import AppLinearProgress from '../mui/AppLinearProgress'
import AppToolTip from '../mui/AppToolTip'



export default function CardSection() {
  return (
    <AppBox sx={{
        border: '1px solid #CBD5E1',
        maxWidth: '270px',
        // height: '144px',
        borderRadius:'12px',
        padding:'16px',
        display:'flex',
        flexDirection:'column',
        gap:'8px',
        flex: 1
     }}
     >
        <AppHStack sx={{width:'100%', justifyContent:'space-between', height:'24px'}}>
            <AppText variant={'h4'} text={'Completed audits'} sx={{color:'#475569', fontSize:'16px'}}/>
            <AppToolTip title="Completed Audits">
              <AppImage src={InfoIcon}/>
            </AppToolTip>
        </AppHStack>
        <AppText sx={{color:'#0F172A', fontSize:'36px', fontWeight:600, lineHeight:'45px',height:'40px' }} variant="h1" text={'85%'}/>
        <AppLinearProgress/>
        {/*  */}
        <AuditTrendText/>
    </AppBox>
  )
}
