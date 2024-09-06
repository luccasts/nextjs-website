import useSWR from 'swr'

import {IAnimeAPI, ResponseError} from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function getAnimes(){    
      const {data, error, isLoading} =useSWR<
      IAnimeAPI, ResponseError>(() => (`http://localhost:3000/api/animes`), getFetcher)
      return ({data, error, isLoading})       

}