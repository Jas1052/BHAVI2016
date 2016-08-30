module.exports = function(name, nature, author, type, resourceAuthor){
    var resource = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<pds:PDS xsi:schemaLocation="http://pds.portaldoors.org/xmlns/2006/npdsystem# nexusroot.xsd" xmlns:pds="http://pds.portaldoors.org/xmlns/2006/npdsystem#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
        '<pds:ClientRequest>' +
            '<pds:URL>aaaaaaaa</pds:URL>' +
            '<pds:Note/>' +
            '<pds:Question/>' +
        '</pds:ClientRequest>' +
        '<pds:ServerResponse>' +
            '<pds:Status/>' +
            '<pds:Note/>' +
            '<pds:Answer>' +
                '<pds:NEXUS pds:Count="0">' +
                    '<pds:ResourceRepresentation ResourceIid="0">' +
                        '<pds:EntityMetadata EntityHid="">' +
                            '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                            '<pds:AliasLabels pds:Count="0">' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                            '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                            '<pds:SupportingTags pds:Count="0">' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                            '<pds:CrossReferences pds:Count="0">' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                            '<pds:OtherMetadata/>' +
                            '<pds:Locations pds:Count="0">' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                            '<pds:Description pds:Count="0"/>' +
                            '<pds:Name/>' +
                            '<pds:Nature/>' +
                            '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                            '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                            '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                        '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                            '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                            '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                            '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                            '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                            '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                            '<pds:Signature/>' +
                            '<pds:Distribution/>' +
                            '<pds:Provenance/>' +
                            '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                            '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                            '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                            '<pds:SecondaryRegistries pds:Count="0">' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                            '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:Directory>' +
                            '<pds:SecondaryDirectories pds:Count="0">' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsRoot" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                        '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                            '<pds:PortalValidation>' +
                                '<pds:Status>Pending</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                            '<pds:DoorsValidation>' +
                                '<pds:Status>Invalid</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                            '<pds:Entailment pds:Count="0">' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                    '<pds:ResourceRepresentation ResourceIid="0">' +
                        '<pds:EntityMetadata EntityHid="">' +
                            '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                            '<pds:AliasLabels pds:Count="0">' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                            '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                            '<pds:SupportingTags pds:Count="0">' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                            '<pds:CrossReferences pds:Count="0">' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                            '<pds:OtherMetadata/>' +
                            '<pds:Locations pds:Count="0">' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                            '<pds:Description pds:Count="0"/>' +
                            '<pds:Name/>' +
                            '<pds:Nature/>' +
                            '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                            '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                            '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                        '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                            '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                            '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                            '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                            '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                            '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                            '<pds:Signature/>' +
                            '<pds:Distribution/>' +
                            '<pds:Provenance/>' +
                            '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:Registrant>' +
                            '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                            '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                            '<pds:SecondaryRegistries pds:Count="0">' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                            '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:Directory>' +
                            '<pds:SecondaryDirectories pds:Count="0">' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                        '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                            '<pds:PortalValidation>' +
                                '<pds:Status>Pending</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                            '<pds:DoorsValidation>' +
                                '<pds:Status>Invalid</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                            '<pds:Entailment pds:Count="0">' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '</pds:NEXUS>' +
            '</pds:Answer>' +
            '<pds:Related>' +
                '<pds:NEXUS pds:Count="0">' +
                    '<pds:ResourceRepresentation ResourceIid="0">' +
                        '<pds:EntityMetadata EntityHid="">' +
                            '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                            '<pds:AliasLabels pds:Count="0">' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                            '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                            '<pds:SupportingTags pds:Count="0">' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                            '<pds:CrossReferences pds:Count="0">' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                            '<pds:OtherMetadata/>' +
                            '<pds:Locations pds:Count="0">' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                            '<pds:Description pds:Count="0"/>' +
                            '<pds:Name/>' +
                            '<pds:Nature/>' +
                            '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                            '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                            '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                        '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                            '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                            '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                            '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                            '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                            '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                            '<pds:Signature/>' +
                            '<pds:Distribution/>' +
                            '<pds:Provenance/>' +
                            '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:Registrant>' +
                            '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                            '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                            '<pds:SecondaryRegistries pds:Count="0">' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                            '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:Directory>' +
                            '<pds:SecondaryDirectories pds:Count="0">' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                        '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                            '<pds:PortalValidation>' +
                                '<pds:Status>Pending</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                            '<pds:DoorsValidation>' +
                                '<pds:Status>Invalid</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                            '<pds:Entailment pds:Count="0">' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                    '<pds:ResourceRepresentation ResourceIid="0">' +
                        '<pds:EntityMetadata EntityHid="">' +
                            '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                            '<pds:AliasLabels pds:Count="0">' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                            '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                            '<pds:SupportingTags pds:Count="0">' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                            '<pds:CrossReferences pds:Count="0">' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                            '<pds:OtherMetadata/>' +
                            '<pds:Locations pds:Count="0">' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                            '<pds:Description pds:Count="0"/>' +
                            '<pds:Name/>' +
                            '<pds:Nature/>' +
                            '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                            '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                            '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusSecondary" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                        '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                            '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                            '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                            '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                            '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                            '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                            '<pds:Signature/>' +
                            '<pds:Distribution/>' +
                            '<pds:Provenance/>' +
                            '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                            '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusPrimary" Priority="0">aaaaaaaa</pds:Registrar>' +
                            '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:Registry>' +
                            '<pds:SecondaryRegistries pds:Count="0">' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                            '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Directory>' +
                            '<pds:SecondaryDirectories pds:Count="0">' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsRoot" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                        '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                            '<pds:PortalValidation>' +
                                '<pds:Status>Valid</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                            '<pds:DoorsValidation>' +
                                '<pds:Status>Valid</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                            '<pds:Entailment pds:Count="0">' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '</pds:NEXUS>' +
            '</pds:Related>' +
            '<pds:Referred>' +
                '<pds:NEXUS pds:Count="0">' +
                    '<pds:ResourceRepresentation ResourceIid="0">' +
                        '<pds:EntityMetadata EntityHid="">' +
                            '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                            '<pds:AliasLabels pds:Count="0">' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                            '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                            '<pds:SupportingTags pds:Count="0">' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                            '<pds:CrossReferences pds:Count="0">' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                            '<pds:OtherMetadata/>' +
                            '<pds:Locations pds:Count="0">' +' +' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                            '<pds:Description pds:Count="0"/>' +
                            '<pds:Name/>' +
                            '<pds:Nature/>' +
                            '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                            '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                            '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                        '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                            '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                            '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                            '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                            '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                            '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                            '<pds:Signature/>' +
                            '<pds:Distribution/>' +
                            '<pds:Provenance/>' +
                            '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                            '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Registrar>' +
                            '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalPrimary" Priority="0">aaaaaaaa</pds:Registry>' +
                            '<pds:SecondaryRegistries pds:Count="0">' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalSecondary" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                            '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsPrimary" Priority="0">aaaaaaaa</pds:Directory>' +
                            '<pds:SecondaryDirectories pds:Count="0">' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                        '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                            '<pds:PortalValidation>' +
                                '<pds:Status>Pending</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                            '<pds:DoorsValidation>' +
                                '<pds:Status>Valid</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                            '<pds:Entailment pds:Count="0">' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                    '<pds:ResourceRepresentation ResourceIid="0">' +
                        '<pds:EntityMetadata EntityHid="">' +
                            '<pds:CanonicalLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:CanonicalLabel>' +
                            '<pds:AliasLabels pds:Count="0">' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                                '<pds:AliasLabel IsTagIndependent="false" IsCanonical="false" IsPrivate="false" Priority="1">aaaaaaaa</pds:AliasLabel>' +
                            '</pds:AliasLabels>' +
                            '<pds:PrincipalTag>a</pds:PrincipalTag>' +
                            '<pds:SupportingTags pds:Count="0">' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:RestrictedSupportingTag>a</pds:RestrictedSupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                                '<pds:SupportingTag>a</pds:SupportingTag>' +
                            '</pds:SupportingTags>' +
                            '<pds:CrossReferences pds:Count="0">' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                                '<pds:CrossReference>token</pds:CrossReference>' +
                            '</pds:CrossReferences>' +
                            '<pds:OtherMetadata/>' +
                            '<pds:Locations pds:Count="0">' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                                '<pds:Location>' +
                                    '<pds:Url>http://www.altova.com</pds:Url>' +
                                    '<pds:Xml>text</pds:Xml>' +
                                    '<pds:DisplayText/>' +
                                    '<pds:DisplayImageUrl>http://www.altova.com</pds:DisplayImageUrl>' +
                                '</pds:Location>' +
                            '</pds:Locations>' +
                            '<pds:Description pds:Count="0"/>' +
                            '<pds:Name/>' +
                            '<pds:Nature/>' +
                            '<pds:OwnerLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:OwnerLabel>' +
                            '<pds:ContactLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ContactLabel>' +
                            '<pds:OtherLabel IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Untyped" Priority="0">aaaaaaaa</pds:OtherLabel>' +
                        '</pds:EntityMetadata>' +
                        '<pds:RecordMetadata IsCachedCopy="false" RecordHandle="aaaaaaaaa">' +
                            '<pds:CreatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:CreatedBy>' +
                            '<pds:CreatedOn>0001-01-01T00:00:00</pds:CreatedOn>' +
                            '<pds:UpdatedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:UpdatedBy>' +
                            '<pds:UpdatedOn>0001-01-01T00:00:00</pds:UpdatedOn>' +
                            '<pds:ManagedBy IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Person" Priority="0">aaaaaaaa</pds:ManagedBy>' +
                            '<pds:Signature/>' +
                            '<pds:Distribution/>' +
                            '<pds:Provenance/>' +
                            '<pds:Registrant IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="Organization" Priority="0">aaaaaaaa</pds:Registrant>' +
                            '<pds:Registrar IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="NexusPrimary" Priority="0">aaaaaaaa</pds:Registrar>' +
                            '<pds:Registry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="SystemRoot" Priority="0">aaaaaaaa</pds:Registry>' +
                            '<pds:SecondaryRegistries pds:Count="0">' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                                '<pds:SecondaryRegistry IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="PortalRoot" Priority="0">aaaaaaaa</pds:SecondaryRegistry>' +
                            '</pds:SecondaryRegistries>' +
                            '<pds:Directory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsRoot" Priority="0">aaaaaaaa</pds:Directory>' +
                            '<pds:SecondaryDirectories pds:Count="0">' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                                '<pds:SecondaryDirectory IsTagIndependent="false" IsCanonical="true" IsPrivate="false" EntityType="DoorsSecondary" Priority="0">aaaaaaaa</pds:SecondaryDirectory>' +
                            '</pds:SecondaryDirectories>' +
                        '</pds:RecordMetadata>' +
                        '<pds:InfosetMetadata InfosetGuid="00000000-0000-0000-0000-000000000000" IsVerbose="false" IsPrivate="false">' +
                            '<pds:PortalValidation>' +
                                '<pds:Status>Pending</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:PortalValidation>' +
                            '<pds:DoorsValidation>' +
                                '<pds:Status>Pending</pds:Status>' +
                                '<pds:TestedOn>2001-12-17T09:30:47Z</pds:TestedOn>' +
                            '</pds:DoorsValidation>' +
                            '<pds:Entailment pds:Count="0">' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                                '<pds:RdfDescription>text</pds:RdfDescription>' +
                            '</pds:Entailment>' +
                        '</pds:InfosetMetadata>' +
                    '</pds:ResourceRepresentation>' +
                '</pds:NEXUS>' +
            '</pds:Referred>' +
        '</pds:ServerResponse>' +
    '</pds:PDS>';

    return resource;
}