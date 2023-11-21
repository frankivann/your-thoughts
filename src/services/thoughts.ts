import { type Thought, type Thoughts } from '../types'
import { format, isToday, isYesterday } from 'date-fns'
import { INITIAL_THOUGHTS, THOUGHTS_STORE_NAME } from '../constants'

function AddFormatDay(thoughts: Thought[]) {
  return thoughts.map(thought => ({
    ...thought,
    formatDay: format(new Date(thought.timestamp), 'MMMM do'),
  }))
}

function groupByFormatDay(thoughts: Thought[]) {
  const grouped = Object.groupBy(thoughts, (thought: Thought) => {
    const today = isToday(new Date(thought.timestamp))
    const yesterday = isYesterday(new Date(thought.timestamp))

    return today ? 'Today' : yesterday ? 'Yesterday' : thought.formatDay
  })

  return grouped.Today ? grouped : { Today: [], ...grouped }
}

export function getStoredThoughts() {
  const thoughts = window.localStorage.getItem(THOUGHTS_STORE_NAME)
  if (thoughts == null) return INITIAL_THOUGHTS

  const parsedThoughts = JSON.parse(thoughts) as Thoughts
  const onlyThoughts = Object.values(parsedThoughts).flat()
  const isThoughtsEmpty = onlyThoughts.length === 0

  if (isThoughtsEmpty) return INITIAL_THOUGHTS

  const thoughtsWithFormatDay = AddFormatDay(onlyThoughts)
  const thoughtsGroupedByFormatDay = groupByFormatDay(thoughtsWithFormatDay)
  return thoughtsGroupedByFormatDay
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem(THOUGHTS_STORE_NAME, JSON.stringify(thoughts))
}

/* 
{"Today":[],"Sunday":[{"id":"dj3m","timestamp":"2023-11-19T15:54:49.649Z","value":"bu","readOnly":true},{"id":"qfl","timestamp":"2023-11-19T15:51:32.843Z","value":"a","readOnly":true}],"Saturday":[{"id":"q65k","timestamp":"2023-11-18T21:54:35.097Z","value":"q","readOnly":true},{"id":"5z8","timestamp":"2023-11-18T21:54:19.461Z","value":"xq","readOnly":true},{"id":"u0h9","timestamp":"2023-11-18T21:54:17.335Z","value":"a","readOnly":true},{"id":"3uw8","timestamp":"2023-11-18T19:56:00.862Z","value":"pelot","readOnly":true},{"id":"othz","timestamp":"2023-11-18T16:48:16.932Z","value":"x","readOnly":true},{"id":"k2oh","timestamp":"2023-11-18T15:33:38.637Z","value":"vi","readOnly":true}],"Friday":[{"id":"ytd","timestamp":"2023-11-17T23:07:54.737Z","value":"po","readOnly":true},{"id":"28vo","timestamp":"2023-11-17T23:06:43.948Z","value":"bae","readOnly":true},{"id":"7y8h","timestamp":"2023-11-17T22:47:06.103Z","value":"hi","readOnly":true},{"id":"157q","timestamp":"2023-11-17T19:07:27.770Z","value":"travis scot","readOnly":true},{"id":"ouxs","timestamp":"2023-11-17T14:26:56.322Z","value":"rest","readOnly":true},{"id":"j58o","timestamp":"2023-11-17T14:26:54.578Z","value":"flow","readOnly":true},{"id":"oiqs","timestamp":"2023-11-17T14:26:51.052Z","value":"back to","readOnly":true}],"Thursday":[{"id":"r2l","timestamp":"2023-11-16T21:48:56.743Z","value":"wow but","readOnly":true},{"id":"rmqb","timestamp":"2023-11-16T21:36:01.822Z","value":"pero","readOnly":true},{"id":"yvuc","timestamp":"2023-11-16T19:52:23.837Z","value":"asd","readOnly":true}],"November 14th":[{"id":"qca9","timestamp":"2023-11-14T15:29:10.296Z","value":"wox","readOnly":true}],"November 12th":[{"id":"uy6q","timestamp":"2023-11-12T20:36:32.823Z","value":"po","readOnly":true}],"October 18th":[{"id":"xrpm","timestamp":"2023-10-18T15:05:39.908Z","value":"today","readOnly":true},{"id":"f3","timestamp":"2022-10-18T15:27:00.329Z","value":"wix","readOnly":true}]}
 */

// mine
/*
{"Today":[{"id":"a518d88f-b5c0-4723-8ec6-01a6a60992ba","timestamp":"2023-11-21T18:33:15.818Z","value":"hi there","formatDay":"November 21st"},{"id":"473052f5-f347-4614-b8e0-94a9bd792fe8","timestamp":"2023-11-21T15:53:01.012Z","value":"hi there","formatDay":"November 21st"}],"November 12th":[],"Yesterday":[{"id":"bacc3057-0f32-4b36-bf77-7c4b2a75d5d3","timestamp":"2023-11-20T20:40:09.892Z","value":"not even in my dreams","formatDay":"November 20th"},{"id":"585181fb-1314-4028-a0fb-9bd225a2387c","timestamp":"2023-11-20T20:40:06.879Z","value":"hi there","formatDay":"November 20th"}],"November 19th":[{"id":"b4f90828-e717-49aa-902b-05058daf529b","timestamp":"2023-11-19T12:40:04.614Z","value":"i love programming","formatDay":"November 19th"}]}
*/
