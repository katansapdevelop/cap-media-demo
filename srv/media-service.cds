using { sap.capire.media as db } from '../db/schema';
namespace sap.capire.media;

service MediaServer  {
    entity Media   as projection on db.Media ;
}

 