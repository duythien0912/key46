import  { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID }  from "graphql";
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

import Good from '../models/Good';
import GroupMember from '../models/GroupMember';
import { Member } from '../models/Member';
import Clip from '../models/Clip';

const customizationOptions = {}; // left it empty for simplicity, described below
const GoodTC = composeWithMongoose(Good, customizationOptions);
const GroupMemberTC = composeWithMongoose(GroupMember, customizationOptions);
const MemberTC = composeWithMongoose(Member, customizationOptions);
const ClipTC = composeWithMongoose(Clip, customizationOptions);

GoodTC.addResolver({
  kind: 'query',
  name: 'hello',
  resolve: () => {console.log("hello babe");
    return "hello babe";
    },
});

schemaComposer.rootQuery().addFields({
  GoodById: GoodTC.getResolver('findById'),
  GoodByIds: GoodTC.getResolver('findByIds'),
  GoodOne: GoodTC.getResolver('findOne'),
  GoodMany: GoodTC.getResolver('findMany'),
  GoodCount: GoodTC.getResolver('count'),
  GoodConnection: GoodTC.getResolver('connection'),
  GoodPagination: GoodTC.getResolver('pagination'),
  GoodHello: GoodTC.getResolver('hello'),

  GroupMemberById: GroupMemberTC.getResolver('findById'),
  GroupMemberByIds: GroupMemberTC.getResolver('findByIds'),
  GroupMemberOne: GroupMemberTC.getResolver('findOne'),
  GroupMemberMany: GroupMemberTC.getResolver('findMany'),
  GroupMemberCount: GroupMemberTC.getResolver('count'),
  GroupMemberConnection: GroupMemberTC.getResolver('connection'),
  GroupMemberPagination: GroupMemberTC.getResolver('pagination'),

  MemberById: MemberTC.getResolver('findById'),
  MemberByIds: MemberTC.getResolver('findByIds'),
  MemberOne: MemberTC.getResolver('findOne'),
  MemberMany: MemberTC.getResolver('findMany'),
  MemberCount: MemberTC.getResolver('count'),
  MemberConnection: MemberTC.getResolver('connection'),
  MemberPagination: MemberTC.getResolver('pagination'),

  ClipById: ClipTC.getResolver('findById'),
  ClipByIds: ClipTC.getResolver('findByIds'),
  ClipOne: ClipTC.getResolver('findOne'),
  ClipMany: ClipTC.getResolver('findMany'),
  ClipCount: ClipTC.getResolver('count'),
  ClipConnection: ClipTC.getResolver('connection'),
  ClipPagination: ClipTC.getResolver('pagination'),


});

schemaComposer.rootMutation().addFields({
  goodCreate: GoodTC.getResolver('createOne'),
  goodUpdateById: GoodTC.getResolver('updateById'),
  goodUpdateOne: GoodTC.getResolver('updateOne'),
  goodUpdateMany: GoodTC.getResolver('updateMany'),
  goodRemoveById: GoodTC.getResolver('removeById'),
  goodRemoveOne: GoodTC.getResolver('removeOne'),
  goodRemoveMany: GoodTC.getResolver('removeMany'),

  GroupMemberCreate: GroupMemberTC.getResolver('createOne'),
  GroupMemberUpdateById: GroupMemberTC.getResolver('updateById'),
  GroupMemberUpdateOne: GroupMemberTC.getResolver('updateOne'),
  GroupMemberUpdateMany: GroupMemberTC.getResolver('updateMany'),
  GroupMemberRemoveById: GroupMemberTC.getResolver('removeById'),
  GroupMemberRemoveOne: GroupMemberTC.getResolver('removeOne'),
  GroupMemberRemoveMany: GroupMemberTC.getResolver('removeMany'),

  MemberCreate: MemberTC.getResolver('createOne'),
  MemberUpdateById: MemberTC.getResolver('updateById'),
  MemberUpdateOne: MemberTC.getResolver('updateOne'),
  MemberUpdateMany: MemberTC.getResolver('updateMany'),
  MemberRemoveById: MemberTC.getResolver('removeById'),
  MemberRemoveOne: MemberTC.getResolver('removeOne'),
  MemberRemoveMany: MemberTC.getResolver('removeMany'),

  ClipCreate: ClipTC.getResolver('createOne'),
  ClipUpdateById: ClipTC.getResolver('updateById'),
  ClipUpdateOne: ClipTC.getResolver('updateOne'),
  ClipUpdateMany: ClipTC.getResolver('updateMany'),
  ClipRemoveById: ClipTC.getResolver('removeById'),
  ClipRemoveOne: ClipTC.getResolver('removeOne'),
  ClipRemoveMany: ClipTC.getResolver('removeMany'),

});

const graphqlSchema = schemaComposer.buildSchema();

export default graphqlSchema;