namespace sap.capire.media;

entity Media {

   key id              : Integer;
       content         : LargeBinary @Core.MediaType  : mediaType;
       mediaType       : String      @Core.IsMediaType: true;
       fileName        : String;
       applicationName : String;
}
