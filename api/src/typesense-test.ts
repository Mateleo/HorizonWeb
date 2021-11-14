
import * as TypeSense from 'typesense';
import type { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

export const client = new TypeSense.Client({
  nodes: [{
    host: 'localhost',
    port: 8108,
    protocol: 'http',
  }],
  apiKey: '2YQIisgfRgm8PV1IVyFZSyOwGMxrk7MU5DgEJICGfql30EPd',
  connectionTimeoutSeconds: 2,
});


const studyDocSchema: CollectionCreateSchema = {
  name: 'studyDoc',
  fields: [
    { name: 'title', type: 'string', facet: false },
    { name: 'author', type: 'string', facet: false },
    { name: 'content', type: 'string', facet: false },
    { name: 'courseCode', type: 'int32', facet: true },
    { name: 'year', type: 'int32', facet: true },
    { name: 'description', type: 'string', facet: false },
  ],
};


client.collections('studyDoc').delete().then(
  (success) => { console.log(success); },
  (err) => { console.log(err); },
  );


client.collections().create(studyDocSchema).then((data) => {
  console.log(data);
}, (err) => { console.log(err); });
