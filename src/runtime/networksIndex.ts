import type { NetworksIndex } from './types'

import { facebook } from './networks/facebook'
import { twitter } from './networks/twitter'
import { linkedin } from './networks/linkedin'
import { pinterest } from './networks/pinterest'
import { reddit } from './networks/reddit'
import { pocket } from './networks/pocket'
import { whatsapp } from './networks/whatsapp'
import { telegram } from './networks/telegram'
import { skype } from './networks/skype'
import { email } from './networks/email'
import { line } from './networks/line'

export const networksIndex: NetworksIndex = {
  // Social Networks
  facebook,
  twitter,
  linkedin,
  pinterest,
  reddit,
  line,
  // Read it later
  pocket,
  // Instant Messaging
  whatsapp,
  telegram,
  skype,
  // Other
  email,
}
