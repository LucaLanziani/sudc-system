// AWS specific infrastructure
exports.awsRoot = {
  type: 'blank-container'
};

exports.awsWebElb = {
  type: 'aws-elb',
  specific: {
    LoadBalancerName: 'webElb',
    Listeners: [{Protocol: 'HTTP', LoadBalancerPort: 80, InstanceProtocol: 'HTTP', InstancePort: 8000}],
    AvailabilityZones: ['us-west-2a'],
    Subnets: ['subnet-xxxxxxxx']
  }
};

exports.awsWebSg = {
  type: 'aws-sg',
  specific: {
    GroupName: 'webSg',
    Description: 'Web security group',
    IpPermissions: [
      { 'IpProtocol': 'tcp', 'FromPort': 3000, 'ToPort': 3000, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 22, 'ToPort': 22, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 9002, 'ToPort': 9002, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 873, 'ToPort': 873, 'IpRanges': [ { 'CidrIp': '10.0.0.0/8' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 9001, 'ToPort': 9001, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 9000, 'ToPort': 9000, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 8000, 'ToPort': 8000, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] }
    ],
    IpPermissionsEgress: [
      { IpProtocol: '-1', UserIdGroupPairs: [], IpRanges: [ { 'CidrIp': '0.0.0.0/0' } ] } ],
    VpcId: 'vpc-xxxxxxxx',
    Tags: []
  }
};

exports.awsMachine = {
  type: 'aws-ami',
  name: 'demo2',
  specific: {
    ImageId: 'ami-xxxxxxxx'
  }
};

