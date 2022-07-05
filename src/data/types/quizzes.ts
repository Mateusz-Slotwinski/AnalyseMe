export interface Question<T> {
  question: string
  effect: QuizEffects & T
}

export interface Ideology<T> {
  name: string
  stats: QuizEffects & T
}

export interface Result<T> {
  quizID: string
  resultID: string
  results: QuizEffects & T
}

export interface QuizThumb {
  Title: string
  Tags: QuizTag[]
  ID: string
}

export enum QuizTagCategory {
  POLITICAL = 'political',
  ECONOMIC = 'economic',
  PHILOSOPHICAL = 'philosophical',
  PSYCHOLOGICAL = 'psychological',
  OTHERS = 'others',
}

export interface QuizTag {
  Name: QuizTagCategory
  Icon: string
  Color: string
}

export interface QuizEffects {
  [key: string]: number
}

export type IAnalyseMeQuiz =
  | _Compass
  | _8Values
  | _9Axes
  | _Soulgraphy_PI
  | _Soulgraphy_EFA
  | _Soulgraphy_EFA
  | _MyPolitics

export interface _Compass extends QuizEffects {
  econ: number
  govt: number
  scty: number
}

export interface _8Values extends QuizEffects {
  econ: number
  dipl: number
  govt: number
  scty: number
}

export interface _9Axes extends QuizEffects {
  fed: number
  dem: number
  glo: number
  mil: number
  fre: number
  equ: number
  sec: number
  pro: number
  mul: number
}

export interface _Soulgraphy_PI extends QuizEffects {
  econ_soci: number
  econ_regu: number
  econ_prot: number
  state_glob: number
  state_peac: number
  state_fede: number
  state_demo: number
  society_indi: number
  society_prog: number
  society_secu: number
  society_revo: number
  law_free: number
  law_reso: number
  law_ecol: number
}

export interface _Soulgraphy_EFA extends QuizEffects {
  org_prop: number
  org_law: number
  org_hier: number
  tax_prog: number
  tax_arti: number
  tax_work: number
  tax_weal: number
  reg_busi: number
  reg_labo: number
  reg_mone: number
  reg_bure: number
  reg_ecol: number
  market_trad: number
  market_auta: number
  market_inve: number
  market_bank: number
}

export interface _Soulgraphy_PFA extends QuizEffects {
  expr_spee: number
  expr_art: number
  expr_poli: number
  state_anar: number
  state_forc: number
  state_poli: number
  state_huma: number
  state_surv: number
  priv_priv: number
  priv_drug: number
  priv_guns: number
  priv_mora: number
  priv_reli: number
  eq_oppo: number
  eq_resu: number
  eq_burd: number
  eq_free: number
}

export interface _MyPolitics extends QuizEffects {
  social: number
  lesef: number
  anarchy: number
  peace: number
  ecology: number
  progress: number
  glob: number
}
