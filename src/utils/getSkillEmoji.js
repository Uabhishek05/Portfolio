import { SKILL_EMOJI_MAP } from '../constants/skillEmoji';

export const getSkillEmoji = (skill) => SKILL_EMOJI_MAP[skill] || '💻';
