export type ElementType = 'Kim' | 'Moc' | 'Thuy' | 'Hoa' | 'Tho';
export type Brightness = 'Miếu' | 'Vượng' | 'Đắc' | 'Bình' | 'Hãm';
export type Mutagen = 'Lộc' | 'Quyền' | 'Khoa' | 'Kỵ' | null;

export interface Star {
  name: string;
  element: ElementType;
  brightness?: Brightness;
  mutagen?: Mutagen;
  isMajor?: boolean;
  type?: 'cat' | 'sat' | 'neutral';
}

export interface PalaceData {
  branchIndex: number;
  branchName: string;
  stemName: string;
  palaceName: string;
  majorStars: Star[];
  minorStars: Star[];
  adjectiveStars: string[];
  daiHan: number;
  tieuHan: string;
  vongTrangSinh: string;
  isThan?: boolean;
  isMenh?: boolean;
}

export interface HoroscopeInfo {
  name: string;
  genderText: string;
  solarDate: string;
  canChiYear: string;
  birthHour: string;
  napAm: string;
  cucName: string;
  cucElement: string;
  menhBranch: string;
  thanBranch: string;
  thanCu: string;
  amDuongLy: string;
  menhCucTuongTac: string;
  menhChu: string;
  thanChu: string;
  city: string;
  diffMin: number;
}
