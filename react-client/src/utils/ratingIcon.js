import CertifiedFresh from '../components/icons/CertifiedFresh';
import Fresh from '../components/icons/Fresh';
import Rotten from '../components/icons/Rotten';

export function getTomatometerIcon(tomatometer) {
  let CriticsIcon = Rotten;
  if (tomatometer >= 0.75) {
    CriticsIcon = CertifiedFresh;
  } else if (tomatometer >= 0.6) {
    CriticsIcon = Fresh;
  }
  return CriticsIcon;
}
