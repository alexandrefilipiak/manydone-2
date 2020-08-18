import React, { Component } from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listDones } from "../graphql/queries";
import { onCreateDone } from "../graphql/subscriptions";
import Error from "./Error";
import { Loading, Card, Icon, Tag } from "element-react";
import { Link } from "react-router-dom";

const DoneList = () => {
  const onNewDone = (prevQuery, newData) => {
    console.log("subscription fired");
    let updatedQuery = { ...prevQuery };
    const updatedDoneList = [
      newData.onCreateDone,
      ...prevQuery.listlistDones.items,
    ];
    updatedQuery.listDones.items = updatedDoneList;
    return updatedQuery;
  };

  return (
    <>
      <h2 className="header">
        <img
          src="https://icon.now.sh/store_mall_directory/527FFF"
          alt="Store Icon"
          className="large-icon"
        />
        DoneList
      </h2>
      <Connect
        query={graphqlOperation(listDones)}
        subscription={graphqlOperation(onCreateDone)}
        onSubscriptionMsg={onNewDone}
      >
        {({ data, loading, errors }) => {
          if (errors.length > 0) return <Error errors={errors} />;
          if (loading || !data.listDones) return <Loading fullscreen={true} />;

          return (
            <>
              {/* {JSON.stringify(data)} */}
              {data.listDones.items.map((done) => (
                <div key={done.id} className="my-2">
                  <Card
                    bodyStyle={{
                      padding: "0.7em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span className="flex">
                      <Link className="link" to={`/done/${done.id}`}>
                        {done.name}
                      </Link>
                      <span style={{ color: "var(--darkAmazonOrange)" }}>
                        {done.description}
                      </span>
                      <img
                        src="https://icon.now.sh/shopping_cart/f60"
                        alt="Shopping cart"
                      />
                    </span>
                    <div style={{ color: "var(--lightSquidInk" }}>
                      {done.owner}
                    </div>
                    <div>
                      {done.category && (
                        <Tag type="danger" className="mx-1">
                          {done.category}
                        </Tag>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </>
          );
        }}
      </Connect>
    </>
  );
};

export default DoneList;
