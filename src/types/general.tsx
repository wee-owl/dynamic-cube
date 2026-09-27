export interface ICubeSide {
  color: string,
  text: string
}

export interface ISideParams {
  id: number | null, 
  uuid: string,
  text: number | null | string,
  top: number | null,
  left: number | null,
}
